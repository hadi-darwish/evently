import { gql } from "@apollo/client";

export const CREATE_EVENT_MUTATION = gql`
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      event {
        id
        title
        description
        startDatetime
        endDatetime
        location
        isFree
        price
        imageUrl
        url
        createdAt
        updatedAt
      }
      clientMutationId
    }
  }
`;
