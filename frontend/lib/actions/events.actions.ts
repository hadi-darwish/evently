"use server";

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import {
  CreateEventInput,
  CreateEventPayload,
  Event,
} from "@/schemas/generated/graphql";
import { CREATE_EVENT_MUTATION, GET_EVENT_BY_ID } from "../mutations/events";
import client from "@/apolloClient";
import { getOrganizerByUserId } from "./organizer.actions";
import { auth } from "@/auth";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  const session = await auth();
  try {
    //if you want to use the organizer info from the database
    // const organizer = await getOrganizerByUserId(Number(userId));

    //@ts-ignore
    const organizer = await JSON.parse(session?.user?.organizerInfo);

    if (!organizer) {
      throw new Error("Organizer not found");
    }

    const input: CreateEventInput = {
      event: {
        categoriesId: Number(event.categoryId),
        description: event.description,
        endDatetime: event.endDateTime,
        imageUrl: event.imageUrl,
        isFree: event.isFree,
        location: event.location,
        organizersId: organizer?.id ?? 0,
        startDatetime: event.startDateTime,
        title: event.title,
        url: event.url,
        ...(event.isFree ? {} : { price: event.price ?? 0 }), // Conditionally include price
      },
    };

    const { data } = await client.mutate<{
      createEvent: CreateEventPayload;
    }>({
      mutation: CREATE_EVENT_MUTATION,
      variables: { input },
    });

    return data?.createEvent?.event;
  } catch (error) {
    handleError(error);
  }
};

export const getEventById = async (eventId: number) => {
  try {
    const { data } = await client.query<{
      eventById: Event;
    }>({
      query: GET_EVENT_BY_ID,
      variables: { id: eventId },
    });

    let event = data?.eventById;

    if (!event) {
      throw new Error("Event not found");
    }

    return event;
  } catch (error) {
    handleError(error);
  }
};
