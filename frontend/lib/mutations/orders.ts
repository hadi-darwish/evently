import { gql } from "@apollo/client";

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      order {
        id
        attendeeId
        eventId
        stripeId
        totalAmount
        createdAt
        updatedAt
      }
      clientMutationId
    }
  }
`;

export const GET_ALL_ORDERS = gql`
  query GetAllOrders(
    $after: Cursor
    $before: Cursor
    $first: Int
    $last: Int
    $condition: OrderCondition
    $orderBy: [OrdersOrderBy!]
  ) {
    allOrders(
      after: $after
      before: $before
      first: $first
      last: $last
      condition: $condition
      orderBy: $orderBy
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          attendeeId
          eventId
          stripeId
          totalAmount
          createdAt
          updatedAt
          attendeeByAttendeeId {
            id
            firstName
            lastName
            usersId
            dateOfBirth
            deletedAt
            userByUsersId {
              id
              email
            }
          }
          eventByEventId {
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
      }
    }
  }
`;
