import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation RegisterFunction($input: RegisterFunctionInput!) {
    registerFunction(input: $input) {
      boolean
      clientMutationId
    }
  }
`;
