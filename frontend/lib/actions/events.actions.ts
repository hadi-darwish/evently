"use server";

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import {
  CreateEventInput,
  CreateEventPayload,
} from "@/schemas/generated/graphql";
import { CREATE_EVENT_MUTATION } from "../mutations/events";
import client from "@/apolloClient";
import { getOrganizerByUserId } from "./organizer.actions";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    const organizer = await getOrganizerByUserId(Number(userId));

    if (!organizer) {
      throw new Error("Organizer not found");
    }

    console.log("event", event);

    const input: CreateEventInput = {
      event: {
        categoriesId: Number(event.categoryId),
        description: event.description,
        endDatetime: event.endDateTime,
        imageUrl: event.imageUrl,
        isFree: event.isFree,
        location: event.location,
        organizersId: organizer[0]?.id ?? 0,
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
    console.log(data?.createEvent?.event);

    return data?.createEvent?.event;
  } catch (error) {
    handleError(error);
  }
};
