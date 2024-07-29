"use server";

import {
  CreateEventParams,
  DeleteEventParams,
  GetAllEventsParams,
  UpdateEventParams,
} from "@/types";
import { handleError } from "../utils";
import {
  CreateEventInput,
  CreateEventPayload,
  Event,
  EventsConnection,
  EventsOrderBy,
  QueryAllEventsArgs,
  UpdateEventByIdInput,
  UpdateEventPayload,
} from "@/schemas/generated/graphql";
import {
  CREATE_EVENT_MUTATION,
  DELETE_EVENT_MUTATION,
  GET_ALL_EVENTS,
  GET_EVENT_BY_ID,
  UPDATE_EVENT_MUTATION,
} from "../mutations/events";
import client from "@/apolloClient";
import { getOrganizerByUserId } from "./organizer.actions";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

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

    revalidatePath(path);
    revalidatePath("/");

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

export const getAllEvents = async ({
  query,
  limit = 6,
  page,
  category,
  after,
  before,
}: GetAllEventsParams) => {
  try {
    let args: QueryAllEventsArgs = {
      orderBy: [EventsOrderBy.CreatedAtDesc],
      // last: limit,
      //   offset: (page - 1) * limit,
      //   after: after,
      //   before: before,
      condition: {
        deletedAt: null,
      },
    };

    const { data } = await client.query<{
      allEvents: EventsConnection;
    }>({
      query: GET_ALL_EVENTS,
      variables: args,
      fetchPolicy: "no-cache",
    });

    return {
      data: data?.allEvents?.edges.map((edge) => edge.node),
      totalPages: Math.ceil(data?.allEvents?.totalCount / limit),
      pageInfo: data?.allEvents?.pageInfo,
    };
  } catch (error) {
    handleError(error);
  }
};

export const deleteEvent = async ({ eventId, path }: DeleteEventParams) => {
  try {
    const { data } = await client.mutate({
      mutation: DELETE_EVENT_MUTATION,
      variables: {
        input: {
          eventId: eventId,
        },
      },
    });

    if (data?.softDeleteEvent?.clientMutationId === null) {
      revalidatePath(path);
    }
  } catch (error) {
    handleError(error);
  }
};
