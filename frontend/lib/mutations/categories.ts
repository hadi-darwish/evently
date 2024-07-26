import { gql } from "@apollo/client";

export const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      category {
        id
        name
        description
        createdAt
        updatedAt
      }
      clientMutationId
    }
  }
`;

export const GET_ALL_CATEGORIES_QUERY = gql`
  query GetAllCategories(
    $after: Cursor
    $before: Cursor
    $first: Int
    $last: Int
    $offset: Int
    $orderBy: [CategoriesOrderBy!]
  ) {
    allCategories(
      after: $after
      before: $before
      first: $first
      last: $last
      offset: $offset
      orderBy: $orderBy
    ) {
      edges {
        node {
          id
          name
          description
          createdAt
          updatedAt
        }
      }
    }
  }
`;
