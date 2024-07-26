"use server";

import client from "@/apolloClient";
import { ORGANIZER_BY_USER_ID_MUTATION } from "../mutations/organizers";
import { handleError } from "../utils";
import { OrganizerbyusersidPayload } from "@/schemas/generated/graphql";

export const getOrganizerByUserId = async (usersId: number) => {
  try {
    const { data } = await client.mutate<{
      organizerbyusersid: OrganizerbyusersidPayload;
    }>({
      mutation: ORGANIZER_BY_USER_ID_MUTATION,
      variables: { input: { pUsersId: usersId } },
    });
    console.log("Organizer by User ID:", data?.organizerbyusersid?.results);

    return data?.organizerbyusersid?.results;
  } catch (error) {
    handleError(error);
  }
};
