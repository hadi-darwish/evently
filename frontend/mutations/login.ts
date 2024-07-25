import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginFunction($input: LoginFunctionInput!) {
    loginFunction(input: $input) {
      clientMutationId
      userInfo {
        id
        email
        username
        phoneNumber
        address
        city
        gender
        role
        organizerInfo
        attendeeInfo
      }
    }
  }
`;
