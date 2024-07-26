import { gql } from "@apollo/client";

export const ORGANIZER_BY_USER_ID_MUTATION = gql`
  mutation OrganizerByUserId($input: OrganizerbyusersidInput!) {
    organizerbyusersid(input: $input) {
      results {
        id
        orgName
        usersId
      }
    }
  }
`;
