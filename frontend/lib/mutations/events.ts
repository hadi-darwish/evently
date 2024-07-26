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

export const GET_EVENT_BY_ID = gql`
  query GetEventById($id: Int!) {
    eventById(id: $id) {
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
      categoriesId
      organizersId
      organizerByOrganizersId {
        id
        orgName
        usersId
      }
      categoryByCategoriesId {
        id
        name
      }
    }
  }
`;
