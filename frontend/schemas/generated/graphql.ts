import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigFloat: { input: any; output: any };
  Cursor: { input: any; output: any };
  Date: { input: any; output: any };
  Datetime: { input: any; output: any };
  JSON: { input: any; output: any };
};

export type Attendee = Node & {
  __typename?: "Attendee";
  dateOfBirth?: Maybe<Scalars["Date"]["output"]>;
  deletedAt?: Maybe<Scalars["Datetime"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `Order`. */
  ordersByAttendeeId: OrdersConnection;
  /** Reads and enables pagination through a set of `Registration`. */
  registrationsByAttendeesId: RegistrationsConnection;
  /** Reads a single `User` that is related to this `Attendee`. */
  userByUsersId?: Maybe<User>;
  usersId: Scalars["Int"]["output"];
};

export type AttendeeOrdersByAttendeeIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<OrderCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type AttendeeRegistrationsByAttendeesIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RegistrationCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RegistrationsOrderBy>>;
};

/**
 * A condition to be used against `Attendee` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AttendeeCondition = {
  /** Checks for equality with the object’s `dateOfBirth` field. */
  dateOfBirth?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `usersId` field. */
  usersId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An input for mutations affecting `Attendee` */
export type AttendeeInput = {
  dateOfBirth?: InputMaybe<Scalars["Date"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  usersId: Scalars["Int"]["input"];
};

/** Represents an update to a `Attendee`. Fields that are set will be updated. */
export type AttendeePatch = {
  dateOfBirth?: InputMaybe<Scalars["Date"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  usersId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A connection to a list of `Attendee` values. */
export type AttendeesConnection = {
  __typename?: "AttendeesConnection";
  /** A list of edges which contains the `Attendee` and cursor to aid in pagination. */
  edges: Array<AttendeesEdge>;
  /** A list of `Attendee` objects. */
  nodes: Array<Maybe<Attendee>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Attendee` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Attendee` edge in the connection. */
export type AttendeesEdge = {
  __typename?: "AttendeesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Attendee` at the end of the edge. */
  node?: Maybe<Attendee>;
};

/** Methods to use when ordering `Attendee`. */
export enum AttendeesOrderBy {
  DateOfBirthAsc = "DATE_OF_BIRTH_ASC",
  DateOfBirthDesc = "DATE_OF_BIRTH_DESC",
  DeletedAtAsc = "DELETED_AT_ASC",
  DeletedAtDesc = "DELETED_AT_DESC",
  FirstNameAsc = "FIRST_NAME_ASC",
  FirstNameDesc = "FIRST_NAME_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UsersIdAsc = "USERS_ID_ASC",
  UsersIdDesc = "USERS_ID_DESC",
}

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: "CategoriesConnection";
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** A list of `Category` objects. */
  nodes: Array<Maybe<Category>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: "CategoriesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Category` at the end of the edge. */
  node?: Maybe<Category>;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  DeletedAtAsc = "DELETED_AT_ASC",
  DeletedAtDesc = "DELETED_AT_DESC",
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UpdatedAtAsc = "UPDATED_AT_ASC",
  UpdatedAtDesc = "UPDATED_AT_DESC",
}

export type Category = Node & {
  __typename?: "Category";
  createdAt: Scalars["Datetime"]["output"];
  deletedAt?: Maybe<Scalars["Datetime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** Reads and enables pagination through a set of `EventSearchIndex`. */
  eventSearchIndicesByCategoryId: EventSearchIndicesConnection;
  /** Reads and enables pagination through a set of `Event`. */
  eventsByCategoriesId: EventsConnection;
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
};

export type CategoryEventSearchIndicesByCategoryIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventSearchIndexCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventSearchIndicesOrderBy>>;
};

export type CategoryEventsByCategoriesIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** All input for the `changePass` mutation. */
export type ChangePassInput = {
  _id?: InputMaybe<Scalars["Int"]["input"]>;
  _newPassword?: InputMaybe<Scalars["String"]["input"]>;
  _oldPassword?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our `changePass` mutation. */
export type ChangePassPayload = {
  __typename?: "ChangePassPayload";
  boolean?: Maybe<Scalars["Boolean"]["output"]>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Attendee` mutation. */
export type CreateAttendeeInput = {
  /** The `Attendee` to be created by this mutation. */
  attendee: AttendeeInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `Attendee` mutation. */
export type CreateAttendeePayload = {
  __typename?: "CreateAttendeePayload";
  /** The `Attendee` that was created by this mutation. */
  attendee?: Maybe<Attendee>;
  /** An edge for our `Attendee`. May be used by Relay 1. */
  attendeeEdge?: Maybe<AttendeesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Attendee`. */
  userByUsersId?: Maybe<User>;
};

/** The output of our create `Attendee` mutation. */
export type CreateAttendeePayloadAttendeeEdgeArgs = {
  orderBy?: InputMaybe<Array<AttendeesOrderBy>>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: "CreateCategoryPayload";
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `Event` to be created by this mutation. */
  event: EventInput;
};

/** The output of our create `Event` mutation. */
export type CreateEventPayload = {
  __typename?: "CreateEventPayload";
  /** Reads a single `Category` that is related to this `Event`. */
  categoryByCategoriesId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** The `Event` that was created by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Reads a single `Organizer` that is related to this `Event`. */
  organizerByOrganizersId?: Maybe<Organizer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the create `EventSearchIndex` mutation. */
export type CreateEventSearchIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `EventSearchIndex` to be created by this mutation. */
  eventSearchIndex: EventSearchIndexInput;
};

/** The output of our create `EventSearchIndex` mutation. */
export type CreateEventSearchIndexPayload = {
  __typename?: "CreateEventSearchIndexPayload";
  /** Reads a single `Category` that is related to this `EventSearchIndex`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `EventSearchIndex`. */
  eventByEventId?: Maybe<Event>;
  /** The `EventSearchIndex` that was created by this mutation. */
  eventSearchIndex?: Maybe<EventSearchIndex>;
  /** An edge for our `EventSearchIndex`. May be used by Relay 1. */
  eventSearchIndexEdge?: Maybe<EventSearchIndicesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `EventSearchIndex` mutation. */
export type CreateEventSearchIndexPayloadEventSearchIndexEdgeArgs = {
  orderBy?: InputMaybe<Array<EventSearchIndicesOrderBy>>;
};

/** All input for the create `Order` mutation. */
export type CreateOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `Order` to be created by this mutation. */
  order: OrderInput;
};

/** The output of our create `Order` mutation. */
export type CreateOrderPayload = {
  __typename?: "CreateOrderPayload";
  /** Reads a single `Attendee` that is related to this `Order`. */
  attendeeByAttendeeId?: Maybe<Attendee>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `Order`. */
  eventByEventId?: Maybe<Event>;
  /** The `Order` that was created by this mutation. */
  order?: Maybe<Order>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Order` mutation. */
export type CreateOrderPayloadOrderEdgeArgs = {
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** All input for the create `Organizer` mutation. */
export type CreateOrganizerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `Organizer` to be created by this mutation. */
  organizer: OrganizerInput;
};

/** The output of our create `Organizer` mutation. */
export type CreateOrganizerPayload = {
  __typename?: "CreateOrganizerPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** The `Organizer` that was created by this mutation. */
  organizer?: Maybe<Organizer>;
  /** An edge for our `Organizer`. May be used by Relay 1. */
  organizerEdge?: Maybe<OrganizersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Organizer`. */
  userByUsersId?: Maybe<User>;
};

/** The output of our create `Organizer` mutation. */
export type CreateOrganizerPayloadOrganizerEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizersOrderBy>>;
};

/** All input for the create `Registration` mutation. */
export type CreateRegistrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `Registration` to be created by this mutation. */
  registration: RegistrationInput;
};

/** The output of our create `Registration` mutation. */
export type CreateRegistrationPayload = {
  __typename?: "CreateRegistrationPayload";
  /** Reads a single `Attendee` that is related to this `Registration`. */
  attendeeByAttendeesId?: Maybe<Attendee>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `Registration`. */
  eventByEventsId?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Registration` that was created by this mutation. */
  registration?: Maybe<Registration>;
  /** An edge for our `Registration`. May be used by Relay 1. */
  registrationEdge?: Maybe<RegistrationsEdge>;
  /** Reads a single `Ticket` that is related to this `Registration`. */
  ticketByTicketsId?: Maybe<Ticket>;
};

/** The output of our create `Registration` mutation. */
export type CreateRegistrationPayloadRegistrationEdgeArgs = {
  orderBy?: InputMaybe<Array<RegistrationsOrderBy>>;
};

/** All input for the create `Role` mutation. */
export type CreateRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `Role` to be created by this mutation. */
  role: RoleInput;
};

/** The output of our create `Role` mutation. */
export type CreateRolePayload = {
  __typename?: "CreateRolePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was created by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};

/** The output of our create `Role` mutation. */
export type CreateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the create `Ticket` mutation. */
export type CreateTicketInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `Ticket` to be created by this mutation. */
  ticket: TicketInput;
};

/** The output of our create `Ticket` mutation. */
export type CreateTicketPayload = {
  __typename?: "CreateTicketPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `Ticket`. */
  eventByEventsId?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Ticket` that was created by this mutation. */
  ticket?: Maybe<Ticket>;
  /** An edge for our `Ticket`. May be used by Relay 1. */
  ticketEdge?: Maybe<TicketsEdge>;
  /** Reads a single `TicketType` that is related to this `Ticket`. */
  ticketTypeByTicketTypesId?: Maybe<TicketType>;
};

/** The output of our create `Ticket` mutation. */
export type CreateTicketPayloadTicketEdgeArgs = {
  orderBy?: InputMaybe<Array<TicketsOrderBy>>;
};

/** All input for the create `TicketType` mutation. */
export type CreateTicketTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `TicketType` to be created by this mutation. */
  ticketType: TicketTypeInput;
};

/** The output of our create `TicketType` mutation. */
export type CreateTicketTypePayload = {
  __typename?: "CreateTicketTypePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TicketType` that was created by this mutation. */
  ticketType?: Maybe<TicketType>;
  /** An edge for our `TicketType`. May be used by Relay 1. */
  ticketTypeEdge?: Maybe<TicketTypesEdge>;
};

/** The output of our create `TicketType` mutation. */
export type CreateTicketTypePayloadTicketTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<TicketTypesOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: "CreateUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `User`. */
  roleByRoleId?: Maybe<Role>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteAttendeeById` mutation. */
export type DeleteAttendeeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteAttendee` mutation. */
export type DeleteAttendeeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Attendee` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Attendee` mutation. */
export type DeleteAttendeePayload = {
  __typename?: "DeleteAttendeePayload";
  /** The `Attendee` that was deleted by this mutation. */
  attendee?: Maybe<Attendee>;
  /** An edge for our `Attendee`. May be used by Relay 1. */
  attendeeEdge?: Maybe<AttendeesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedAttendeeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Attendee`. */
  userByUsersId?: Maybe<User>;
};

/** The output of our delete `Attendee` mutation. */
export type DeleteAttendeePayloadAttendeeEdgeArgs = {
  orderBy?: InputMaybe<Array<AttendeesOrderBy>>;
};

/** All input for the `deleteCategoryById` mutation. */
export type DeleteCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteCategoryByName` mutation. */
export type DeleteCategoryByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: "DeleteCategoryPayload";
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedCategoryId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteEventById` mutation. */
export type DeleteEventByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  __typename?: "DeleteEventPayload";
  /** Reads a single `Category` that is related to this `Event`. */
  categoryByCategoriesId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedEventId?: Maybe<Scalars["ID"]["output"]>;
  /** The `Event` that was deleted by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Reads a single `Organizer` that is related to this `Event`. */
  organizerByOrganizersId?: Maybe<Organizer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the `deleteEventSearchIndexById` mutation. */
export type DeleteEventSearchIndexByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteEventSearchIndex` mutation. */
export type DeleteEventSearchIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `EventSearchIndex` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `EventSearchIndex` mutation. */
export type DeleteEventSearchIndexPayload = {
  __typename?: "DeleteEventSearchIndexPayload";
  /** Reads a single `Category` that is related to this `EventSearchIndex`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedEventSearchIndexId?: Maybe<Scalars["ID"]["output"]>;
  /** Reads a single `Event` that is related to this `EventSearchIndex`. */
  eventByEventId?: Maybe<Event>;
  /** The `EventSearchIndex` that was deleted by this mutation. */
  eventSearchIndex?: Maybe<EventSearchIndex>;
  /** An edge for our `EventSearchIndex`. May be used by Relay 1. */
  eventSearchIndexEdge?: Maybe<EventSearchIndicesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `EventSearchIndex` mutation. */
export type DeleteEventSearchIndexPayloadEventSearchIndexEdgeArgs = {
  orderBy?: InputMaybe<Array<EventSearchIndicesOrderBy>>;
};

/** All input for the `deleteOrderById` mutation. */
export type DeleteOrderByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteOrderByStripeId` mutation. */
export type DeleteOrderByStripeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  stripeId: Scalars["String"]["input"];
};

/** All input for the `deleteOrder` mutation. */
export type DeleteOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Order` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Order` mutation. */
export type DeleteOrderPayload = {
  __typename?: "DeleteOrderPayload";
  /** Reads a single `Attendee` that is related to this `Order`. */
  attendeeByAttendeeId?: Maybe<Attendee>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedOrderId?: Maybe<Scalars["ID"]["output"]>;
  /** Reads a single `Event` that is related to this `Order`. */
  eventByEventId?: Maybe<Event>;
  /** The `Order` that was deleted by this mutation. */
  order?: Maybe<Order>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Order` mutation. */
export type DeleteOrderPayloadOrderEdgeArgs = {
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** All input for the `deleteOrganizerById` mutation. */
export type DeleteOrganizerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteOrganizer` mutation. */
export type DeleteOrganizerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Organizer` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Organizer` mutation. */
export type DeleteOrganizerPayload = {
  __typename?: "DeleteOrganizerPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedOrganizerId?: Maybe<Scalars["ID"]["output"]>;
  /** The `Organizer` that was deleted by this mutation. */
  organizer?: Maybe<Organizer>;
  /** An edge for our `Organizer`. May be used by Relay 1. */
  organizerEdge?: Maybe<OrganizersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Organizer`. */
  userByUsersId?: Maybe<User>;
};

/** The output of our delete `Organizer` mutation. */
export type DeleteOrganizerPayloadOrganizerEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizersOrderBy>>;
};

/** All input for the `deleteRegistrationById` mutation. */
export type DeleteRegistrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteRegistration` mutation. */
export type DeleteRegistrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Registration` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Registration` mutation. */
export type DeleteRegistrationPayload = {
  __typename?: "DeleteRegistrationPayload";
  /** Reads a single `Attendee` that is related to this `Registration`. */
  attendeeByAttendeesId?: Maybe<Attendee>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedRegistrationId?: Maybe<Scalars["ID"]["output"]>;
  /** Reads a single `Event` that is related to this `Registration`. */
  eventByEventsId?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Registration` that was deleted by this mutation. */
  registration?: Maybe<Registration>;
  /** An edge for our `Registration`. May be used by Relay 1. */
  registrationEdge?: Maybe<RegistrationsEdge>;
  /** Reads a single `Ticket` that is related to this `Registration`. */
  ticketByTicketsId?: Maybe<Ticket>;
};

/** The output of our delete `Registration` mutation. */
export type DeleteRegistrationPayloadRegistrationEdgeArgs = {
  orderBy?: InputMaybe<Array<RegistrationsOrderBy>>;
};

/** All input for the `deleteRoleById` mutation. */
export type DeleteRoleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteRole` mutation. */
export type DeleteRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Role` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Role` mutation. */
export type DeleteRolePayload = {
  __typename?: "DeleteRolePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedRoleId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was deleted by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};

/** The output of our delete `Role` mutation. */
export type DeleteRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the `deleteTicketById` mutation. */
export type DeleteTicketByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteTicket` mutation. */
export type DeleteTicketInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Ticket` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Ticket` mutation. */
export type DeleteTicketPayload = {
  __typename?: "DeleteTicketPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedTicketId?: Maybe<Scalars["ID"]["output"]>;
  /** Reads a single `Event` that is related to this `Ticket`. */
  eventByEventsId?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Ticket` that was deleted by this mutation. */
  ticket?: Maybe<Ticket>;
  /** An edge for our `Ticket`. May be used by Relay 1. */
  ticketEdge?: Maybe<TicketsEdge>;
  /** Reads a single `TicketType` that is related to this `Ticket`. */
  ticketTypeByTicketTypesId?: Maybe<TicketType>;
};

/** The output of our delete `Ticket` mutation. */
export type DeleteTicketPayloadTicketEdgeArgs = {
  orderBy?: InputMaybe<Array<TicketsOrderBy>>;
};

/** All input for the `deleteTicketTypeById` mutation. */
export type DeleteTicketTypeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteTicketType` mutation. */
export type DeleteTicketTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `TicketType` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `TicketType` mutation. */
export type DeleteTicketTypePayload = {
  __typename?: "DeleteTicketTypePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedTicketTypeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TicketType` that was deleted by this mutation. */
  ticketType?: Maybe<TicketType>;
  /** An edge for our `TicketType`. May be used by Relay 1. */
  ticketTypeEdge?: Maybe<TicketTypesEdge>;
};

/** The output of our delete `TicketType` mutation. */
export type DeleteTicketTypePayloadTicketTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<TicketTypesOrderBy>>;
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: "DeleteUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `User`. */
  roleByRoleId?: Maybe<Role>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type Event = Node & {
  __typename?: "Event";
  categoriesId: Scalars["Int"]["output"];
  /** Reads a single `Category` that is related to this `Event`. */
  categoryByCategoriesId?: Maybe<Category>;
  createdAt?: Maybe<Scalars["Datetime"]["output"]>;
  deletedAt?: Maybe<Scalars["Datetime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  endDatetime?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `EventSearchIndex`. */
  eventSearchIndicesByEventId: EventSearchIndicesConnection;
  id: Scalars["Int"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  isFree?: Maybe<Scalars["Boolean"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `Order`. */
  ordersByEventId: OrdersConnection;
  /** Reads a single `Organizer` that is related to this `Event`. */
  organizerByOrganizersId?: Maybe<Organizer>;
  organizersId: Scalars["Int"]["output"];
  price?: Maybe<Scalars["BigFloat"]["output"]>;
  /** Reads and enables pagination through a set of `Registration`. */
  registrationsByEventsId: RegistrationsConnection;
  startDatetime?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `Ticket`. */
  ticketsByEventsId: TicketsConnection;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type EventEventSearchIndicesByEventIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventSearchIndexCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventSearchIndicesOrderBy>>;
};

export type EventOrdersByEventIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<OrderCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type EventRegistrationsByEventsIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RegistrationCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RegistrationsOrderBy>>;
};

export type EventTicketsByEventsIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<TicketCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TicketsOrderBy>>;
};

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `categoriesId` field. */
  categoriesId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `endDatetime` field. */
  endDatetime?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `imageUrl` field. */
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `isFree` field. */
  isFree?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks for equality with the object’s `location` field. */
  location?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `organizersId` field. */
  organizersId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  /** Checks for equality with the object’s `startDatetime` field. */
  startDatetime?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** An input for mutations affecting `Event` */
export type EventInput = {
  categoriesId: Scalars["Int"]["input"];
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDatetime?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  isFree?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  organizersId: Scalars["Int"]["input"];
  price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  startDatetime?: InputMaybe<Scalars["Datetime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  categoriesId?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDatetime?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  isFree?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  organizersId?: InputMaybe<Scalars["Int"]["input"]>;
  price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  startDatetime?: InputMaybe<Scalars["Datetime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type EventSearchIndex = Node & {
  __typename?: "EventSearchIndex";
  /** Reads a single `Category` that is related to this `EventSearchIndex`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Datetime"]["output"]>;
  deletedAt?: Maybe<Scalars["Datetime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `EventSearchIndex`. */
  eventByEventId?: Maybe<Event>;
  eventId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  searchVector?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/**
 * A condition to be used against `EventSearchIndex` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventSearchIndexCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `searchVector` field. */
  searchVector?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** An input for mutations affecting `EventSearchIndex` */
export type EventSearchIndexInput = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  searchVector?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents an update to a `EventSearchIndex`. Fields that are set will be updated. */
export type EventSearchIndexPatch = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  searchVector?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `EventSearchIndex` values. */
export type EventSearchIndicesConnection = {
  __typename?: "EventSearchIndicesConnection";
  /** A list of edges which contains the `EventSearchIndex` and cursor to aid in pagination. */
  edges: Array<EventSearchIndicesEdge>;
  /** A list of `EventSearchIndex` objects. */
  nodes: Array<Maybe<EventSearchIndex>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `EventSearchIndex` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `EventSearchIndex` edge in the connection. */
export type EventSearchIndicesEdge = {
  __typename?: "EventSearchIndicesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `EventSearchIndex` at the end of the edge. */
  node?: Maybe<EventSearchIndex>;
};

/** Methods to use when ordering `EventSearchIndex`. */
export enum EventSearchIndicesOrderBy {
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  DeletedAtAsc = "DELETED_AT_ASC",
  DeletedAtDesc = "DELETED_AT_DESC",
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  EventIdAsc = "EVENT_ID_ASC",
  EventIdDesc = "EVENT_ID_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  SearchVectorAsc = "SEARCH_VECTOR_ASC",
  SearchVectorDesc = "SEARCH_VECTOR_DESC",
  TitleAsc = "TITLE_ASC",
  TitleDesc = "TITLE_DESC",
}

/** A connection to a list of `Event` values. */
export type EventsConnection = {
  __typename?: "EventsConnection";
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventsEdge>;
  /** A list of `Event` objects. */
  nodes: Array<Maybe<Event>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Event` edge in the connection. */
export type EventsEdge = {
  __typename?: "EventsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Event` at the end of the edge. */
  node?: Maybe<Event>;
};

/** Methods to use when ordering `Event`. */
export enum EventsOrderBy {
  CategoriesIdAsc = "CATEGORIES_ID_ASC",
  CategoriesIdDesc = "CATEGORIES_ID_DESC",
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  DeletedAtAsc = "DELETED_AT_ASC",
  DeletedAtDesc = "DELETED_AT_DESC",
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  EndDatetimeAsc = "END_DATETIME_ASC",
  EndDatetimeDesc = "END_DATETIME_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  ImageUrlAsc = "IMAGE_URL_ASC",
  ImageUrlDesc = "IMAGE_URL_DESC",
  IsFreeAsc = "IS_FREE_ASC",
  IsFreeDesc = "IS_FREE_DESC",
  LocationAsc = "LOCATION_ASC",
  LocationDesc = "LOCATION_DESC",
  Natural = "NATURAL",
  OrganizersIdAsc = "ORGANIZERS_ID_ASC",
  OrganizersIdDesc = "ORGANIZERS_ID_DESC",
  PriceAsc = "PRICE_ASC",
  PriceDesc = "PRICE_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  StartDatetimeAsc = "START_DATETIME_ASC",
  StartDatetimeDesc = "START_DATETIME_DESC",
  TitleAsc = "TITLE_ASC",
  TitleDesc = "TITLE_DESC",
  UpdatedAtAsc = "UPDATED_AT_ASC",
  UpdatedAtDesc = "UPDATED_AT_DESC",
  UrlAsc = "URL_ASC",
  UrlDesc = "URL_DESC",
}

export enum Gender {
  Female = "FEMALE",
  Male = "MALE",
}

/** All input for the `loginFunction` mutation. */
export type LoginFunctionInput = {
  _email?: InputMaybe<Scalars["String"]["input"]>;
  _password?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our `loginFunction` mutation. */
export type LoginFunctionPayload = {
  __typename?: "LoginFunctionPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  userInfo?: Maybe<UserInfo>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: "Mutation";
  changePass?: Maybe<ChangePassPayload>;
  /** Creates a single `Attendee`. */
  createAttendee?: Maybe<CreateAttendeePayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `Event`. */
  createEvent?: Maybe<CreateEventPayload>;
  /** Creates a single `EventSearchIndex`. */
  createEventSearchIndex?: Maybe<CreateEventSearchIndexPayload>;
  /** Creates a single `Order`. */
  createOrder?: Maybe<CreateOrderPayload>;
  /** Creates a single `Organizer`. */
  createOrganizer?: Maybe<CreateOrganizerPayload>;
  /** Creates a single `Registration`. */
  createRegistration?: Maybe<CreateRegistrationPayload>;
  /** Creates a single `Role`. */
  createRole?: Maybe<CreateRolePayload>;
  /** Creates a single `Ticket`. */
  createTicket?: Maybe<CreateTicketPayload>;
  /** Creates a single `TicketType`. */
  createTicketType?: Maybe<CreateTicketTypePayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Attendee` using its globally unique id. */
  deleteAttendee?: Maybe<DeleteAttendeePayload>;
  /** Deletes a single `Attendee` using a unique key. */
  deleteAttendeeById?: Maybe<DeleteAttendeePayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryById?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryByName?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Event` using its globally unique id. */
  deleteEvent?: Maybe<DeleteEventPayload>;
  /** Deletes a single `Event` using a unique key. */
  deleteEventById?: Maybe<DeleteEventPayload>;
  /** Deletes a single `EventSearchIndex` using its globally unique id. */
  deleteEventSearchIndex?: Maybe<DeleteEventSearchIndexPayload>;
  /** Deletes a single `EventSearchIndex` using a unique key. */
  deleteEventSearchIndexById?: Maybe<DeleteEventSearchIndexPayload>;
  /** Deletes a single `Order` using its globally unique id. */
  deleteOrder?: Maybe<DeleteOrderPayload>;
  /** Deletes a single `Order` using a unique key. */
  deleteOrderById?: Maybe<DeleteOrderPayload>;
  /** Deletes a single `Order` using a unique key. */
  deleteOrderByStripeId?: Maybe<DeleteOrderPayload>;
  /** Deletes a single `Organizer` using its globally unique id. */
  deleteOrganizer?: Maybe<DeleteOrganizerPayload>;
  /** Deletes a single `Organizer` using a unique key. */
  deleteOrganizerById?: Maybe<DeleteOrganizerPayload>;
  /** Deletes a single `Registration` using its globally unique id. */
  deleteRegistration?: Maybe<DeleteRegistrationPayload>;
  /** Deletes a single `Registration` using a unique key. */
  deleteRegistrationById?: Maybe<DeleteRegistrationPayload>;
  /** Deletes a single `Role` using its globally unique id. */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Deletes a single `Role` using a unique key. */
  deleteRoleById?: Maybe<DeleteRolePayload>;
  /** Deletes a single `Ticket` using its globally unique id. */
  deleteTicket?: Maybe<DeleteTicketPayload>;
  /** Deletes a single `Ticket` using a unique key. */
  deleteTicketById?: Maybe<DeleteTicketPayload>;
  /** Deletes a single `TicketType` using its globally unique id. */
  deleteTicketType?: Maybe<DeleteTicketTypePayload>;
  /** Deletes a single `TicketType` using a unique key. */
  deleteTicketTypeById?: Maybe<DeleteTicketTypePayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  loginFunction?: Maybe<LoginFunctionPayload>;
  organizerbyusersid?: Maybe<OrganizerbyusersidPayload>;
  registerFunction?: Maybe<RegisterFunctionPayload>;
  searchEventIndices?: Maybe<SearchEventIndicesPayload>;
  softDeleteAttendee?: Maybe<SoftDeleteAttendeePayload>;
  softDeleteCategory?: Maybe<SoftDeleteCategoryPayload>;
  softDeleteEvent?: Maybe<SoftDeleteEventPayload>;
  softDeleteOrder?: Maybe<SoftDeleteOrderPayload>;
  softDeleteOrganizer?: Maybe<SoftDeleteOrganizerPayload>;
  softDeleteUser?: Maybe<SoftDeleteUserPayload>;
  /** Updates a single `Attendee` using its globally unique id and a patch. */
  updateAttendee?: Maybe<UpdateAttendeePayload>;
  /** Updates a single `Attendee` using a unique key and a patch. */
  updateAttendeeById?: Maybe<UpdateAttendeePayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryById?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryByName?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Event` using its globally unique id and a patch. */
  updateEvent?: Maybe<UpdateEventPayload>;
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventById?: Maybe<UpdateEventPayload>;
  /** Updates a single `EventSearchIndex` using its globally unique id and a patch. */
  updateEventSearchIndex?: Maybe<UpdateEventSearchIndexPayload>;
  /** Updates a single `EventSearchIndex` using a unique key and a patch. */
  updateEventSearchIndexById?: Maybe<UpdateEventSearchIndexPayload>;
  /** Updates a single `Order` using its globally unique id and a patch. */
  updateOrder?: Maybe<UpdateOrderPayload>;
  /** Updates a single `Order` using a unique key and a patch. */
  updateOrderById?: Maybe<UpdateOrderPayload>;
  /** Updates a single `Order` using a unique key and a patch. */
  updateOrderByStripeId?: Maybe<UpdateOrderPayload>;
  /** Updates a single `Organizer` using its globally unique id and a patch. */
  updateOrganizer?: Maybe<UpdateOrganizerPayload>;
  /** Updates a single `Organizer` using a unique key and a patch. */
  updateOrganizerById?: Maybe<UpdateOrganizerPayload>;
  /** Updates a single `Registration` using its globally unique id and a patch. */
  updateRegistration?: Maybe<UpdateRegistrationPayload>;
  /** Updates a single `Registration` using a unique key and a patch. */
  updateRegistrationById?: Maybe<UpdateRegistrationPayload>;
  /** Updates a single `Role` using its globally unique id and a patch. */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Updates a single `Role` using a unique key and a patch. */
  updateRoleById?: Maybe<UpdateRolePayload>;
  /** Updates a single `Ticket` using its globally unique id and a patch. */
  updateTicket?: Maybe<UpdateTicketPayload>;
  /** Updates a single `Ticket` using a unique key and a patch. */
  updateTicketById?: Maybe<UpdateTicketPayload>;
  /** Updates a single `TicketType` using its globally unique id and a patch. */
  updateTicketType?: Maybe<UpdateTicketTypePayload>;
  /** Updates a single `TicketType` using a unique key and a patch. */
  updateTicketTypeById?: Maybe<UpdateTicketTypePayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByEmail?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationChangePassArgs = {
  input: ChangePassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAttendeeArgs = {
  input: CreateAttendeeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventArgs = {
  input: CreateEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventSearchIndexArgs = {
  input: CreateEventSearchIndexInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizerArgs = {
  input: CreateOrganizerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRegistrationArgs = {
  input: CreateRegistrationInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTicketTypeArgs = {
  input: CreateTicketTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAttendeeArgs = {
  input: DeleteAttendeeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAttendeeByIdArgs = {
  input: DeleteAttendeeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByIdArgs = {
  input: DeleteCategoryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByNameArgs = {
  input: DeleteCategoryByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventArgs = {
  input: DeleteEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByIdArgs = {
  input: DeleteEventByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventSearchIndexArgs = {
  input: DeleteEventSearchIndexInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventSearchIndexByIdArgs = {
  input: DeleteEventSearchIndexByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrderByIdArgs = {
  input: DeleteOrderByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrderByStripeIdArgs = {
  input: DeleteOrderByStripeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizerArgs = {
  input: DeleteOrganizerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizerByIdArgs = {
  input: DeleteOrganizerByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegistrationArgs = {
  input: DeleteRegistrationInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegistrationByIdArgs = {
  input: DeleteRegistrationByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleByIdArgs = {
  input: DeleteRoleByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTicketArgs = {
  input: DeleteTicketInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTicketByIdArgs = {
  input: DeleteTicketByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTicketTypeArgs = {
  input: DeleteTicketTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTicketTypeByIdArgs = {
  input: DeleteTicketTypeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationLoginFunctionArgs = {
  input: LoginFunctionInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationOrganizerbyusersidArgs = {
  input: OrganizerbyusersidInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterFunctionArgs = {
  input: RegisterFunctionInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSearchEventIndicesArgs = {
  input: SearchEventIndicesInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSoftDeleteAttendeeArgs = {
  input: SoftDeleteAttendeeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSoftDeleteCategoryArgs = {
  input: SoftDeleteCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSoftDeleteEventArgs = {
  input: SoftDeleteEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSoftDeleteOrderArgs = {
  input: SoftDeleteOrderInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSoftDeleteOrganizerArgs = {
  input: SoftDeleteOrganizerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationSoftDeleteUserArgs = {
  input: SoftDeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttendeeArgs = {
  input: UpdateAttendeeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttendeeByIdArgs = {
  input: UpdateAttendeeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByIdArgs = {
  input: UpdateCategoryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByNameArgs = {
  input: UpdateCategoryByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByIdArgs = {
  input: UpdateEventByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventSearchIndexArgs = {
  input: UpdateEventSearchIndexInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventSearchIndexByIdArgs = {
  input: UpdateEventSearchIndexByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrderByIdArgs = {
  input: UpdateOrderByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrderByStripeIdArgs = {
  input: UpdateOrderByStripeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizerArgs = {
  input: UpdateOrganizerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizerByIdArgs = {
  input: UpdateOrganizerByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegistrationArgs = {
  input: UpdateRegistrationInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegistrationByIdArgs = {
  input: UpdateRegistrationByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleByIdArgs = {
  input: UpdateRoleByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTicketArgs = {
  input: UpdateTicketInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTicketByIdArgs = {
  input: UpdateTicketByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTicketTypeArgs = {
  input: UpdateTicketTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTicketTypeByIdArgs = {
  input: UpdateTicketTypeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
};

export type Order = Node & {
  __typename?: "Order";
  /** Reads a single `Attendee` that is related to this `Order`. */
  attendeeByAttendeeId?: Maybe<Attendee>;
  attendeeId: Scalars["Int"]["output"];
  createdAt: Scalars["Datetime"]["output"];
  deletedAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads a single `Event` that is related to this `Order`. */
  eventByEventId?: Maybe<Event>;
  eventId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  stripeId: Scalars["String"]["output"];
  totalAmount: Scalars["BigFloat"]["output"];
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
};

/** A condition to be used against `Order` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type OrderCondition = {
  /** Checks for equality with the object’s `attendeeId` field. */
  attendeeId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `stripeId` field. */
  stripeId?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `totalAmount` field. */
  totalAmount?: InputMaybe<Scalars["BigFloat"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** An input for mutations affecting `Order` */
export type OrderInput = {
  attendeeId: Scalars["Int"]["input"];
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  eventId: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  stripeId: Scalars["String"]["input"];
  totalAmount: Scalars["BigFloat"]["input"];
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Represents an update to a `Order`. Fields that are set will be updated. */
export type OrderPatch = {
  attendeeId?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  stripeId?: InputMaybe<Scalars["String"]["input"]>;
  totalAmount?: InputMaybe<Scalars["BigFloat"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** A connection to a list of `Order` values. */
export type OrdersConnection = {
  __typename?: "OrdersConnection";
  /** A list of edges which contains the `Order` and cursor to aid in pagination. */
  edges: Array<OrdersEdge>;
  /** A list of `Order` objects. */
  nodes: Array<Maybe<Order>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Order` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Order` edge in the connection. */
export type OrdersEdge = {
  __typename?: "OrdersEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Order` at the end of the edge. */
  node?: Maybe<Order>;
};

/** Methods to use when ordering `Order`. */
export enum OrdersOrderBy {
  AttendeeIdAsc = "ATTENDEE_ID_ASC",
  AttendeeIdDesc = "ATTENDEE_ID_DESC",
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  DeletedAtAsc = "DELETED_AT_ASC",
  DeletedAtDesc = "DELETED_AT_DESC",
  EventIdAsc = "EVENT_ID_ASC",
  EventIdDesc = "EVENT_ID_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  StripeIdAsc = "STRIPE_ID_ASC",
  StripeIdDesc = "STRIPE_ID_DESC",
  TotalAmountAsc = "TOTAL_AMOUNT_ASC",
  TotalAmountDesc = "TOTAL_AMOUNT_DESC",
  UpdatedAtAsc = "UPDATED_AT_ASC",
  UpdatedAtDesc = "UPDATED_AT_DESC",
}

export type Organizer = Node & {
  __typename?: "Organizer";
  deletedAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `Event`. */
  eventsByOrganizersId: EventsConnection;
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  orgName?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `User` that is related to this `Organizer`. */
  userByUsersId?: Maybe<User>;
  usersId: Scalars["Int"]["output"];
};

export type OrganizerEventsByOrganizersIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/**
 * A condition to be used against `Organizer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type OrganizerCondition = {
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `orgName` field. */
  orgName?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `usersId` field. */
  usersId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An input for mutations affecting `Organizer` */
export type OrganizerInput = {
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  orgName?: InputMaybe<Scalars["String"]["input"]>;
  usersId: Scalars["Int"]["input"];
};

/** Represents an update to a `Organizer`. Fields that are set will be updated. */
export type OrganizerPatch = {
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  orgName?: InputMaybe<Scalars["String"]["input"]>;
  usersId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** All input for the `organizerbyusersid` mutation. */
export type OrganizerbyusersidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  pUsersId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The output of our `organizerbyusersid` mutation. */
export type OrganizerbyusersidPayload = {
  __typename?: "OrganizerbyusersidPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  results?: Maybe<Array<Maybe<OrganizerbyusersidRecord>>>;
};

/** The return type of our `organizerbyusersid` mutation. */
export type OrganizerbyusersidRecord = {
  __typename?: "OrganizerbyusersidRecord";
  id?: Maybe<Scalars["Int"]["output"]>;
  orgName?: Maybe<Scalars["String"]["output"]>;
  usersId?: Maybe<Scalars["Int"]["output"]>;
};

/** A connection to a list of `Organizer` values. */
export type OrganizersConnection = {
  __typename?: "OrganizersConnection";
  /** A list of edges which contains the `Organizer` and cursor to aid in pagination. */
  edges: Array<OrganizersEdge>;
  /** A list of `Organizer` objects. */
  nodes: Array<Maybe<Organizer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organizer` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Organizer` edge in the connection. */
export type OrganizersEdge = {
  __typename?: "OrganizersEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Organizer` at the end of the edge. */
  node?: Maybe<Organizer>;
};

/** Methods to use when ordering `Organizer`. */
export enum OrganizersOrderBy {
  DeletedAtAsc = "DELETED_AT_ASC",
  DeletedAtDesc = "DELETED_AT_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  OrgNameAsc = "ORG_NAME_ASC",
  OrgNameDesc = "ORG_NAME_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UsersIdAsc = "USERS_ID_ASC",
  UsersIdDesc = "USERS_ID_DESC",
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["Cursor"]["output"]>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: "Query";
  /** Reads and enables pagination through a set of `Attendee`. */
  allAttendees?: Maybe<AttendeesConnection>;
  /** Reads and enables pagination through a set of `Category`. */
  allCategories?: Maybe<CategoriesConnection>;
  /** Reads and enables pagination through a set of `EventSearchIndex`. */
  allEventSearchIndices?: Maybe<EventSearchIndicesConnection>;
  /** Reads and enables pagination through a set of `Event`. */
  allEvents?: Maybe<EventsConnection>;
  /** Reads and enables pagination through a set of `Order`. */
  allOrders?: Maybe<OrdersConnection>;
  /** Reads and enables pagination through a set of `Organizer`. */
  allOrganizers?: Maybe<OrganizersConnection>;
  /** Reads and enables pagination through a set of `Registration`. */
  allRegistrations?: Maybe<RegistrationsConnection>;
  /** Reads and enables pagination through a set of `Role`. */
  allRoles?: Maybe<RolesConnection>;
  /** Reads and enables pagination through a set of `TicketType`. */
  allTicketTypes?: Maybe<TicketTypesConnection>;
  /** Reads and enables pagination through a set of `Ticket`. */
  allTickets?: Maybe<TicketsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a single `Attendee` using its globally unique `ID`. */
  attendee?: Maybe<Attendee>;
  attendeeById?: Maybe<Attendee>;
  /** Reads a single `Category` using its globally unique `ID`. */
  category?: Maybe<Category>;
  categoryById?: Maybe<Category>;
  categoryByName?: Maybe<Category>;
  /** Reads a single `Event` using its globally unique `ID`. */
  event?: Maybe<Event>;
  eventById?: Maybe<Event>;
  /** Reads a single `EventSearchIndex` using its globally unique `ID`. */
  eventSearchIndex?: Maybe<EventSearchIndex>;
  eventSearchIndexById?: Maybe<EventSearchIndex>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"]["output"];
  /** Reads a single `Order` using its globally unique `ID`. */
  order?: Maybe<Order>;
  orderById?: Maybe<Order>;
  orderByStripeId?: Maybe<Order>;
  /** Reads a single `Organizer` using its globally unique `ID`. */
  organizer?: Maybe<Organizer>;
  organizerById?: Maybe<Organizer>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Registration` using its globally unique `ID`. */
  registration?: Maybe<Registration>;
  registrationById?: Maybe<Registration>;
  /** Reads a single `Role` using its globally unique `ID`. */
  role?: Maybe<Role>;
  roleById?: Maybe<Role>;
  /** Reads a single `Ticket` using its globally unique `ID`. */
  ticket?: Maybe<Ticket>;
  ticketById?: Maybe<Ticket>;
  /** Reads a single `TicketType` using its globally unique `ID`. */
  ticketType?: Maybe<TicketType>;
  ticketTypeById?: Maybe<TicketType>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllAttendeesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<AttendeeCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AttendeesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<CategoryCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllEventSearchIndicesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventSearchIndexCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventSearchIndicesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllOrdersArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<OrderCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllOrganizersArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<OrganizerCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrganizersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllRegistrationsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RegistrationCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RegistrationsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllRolesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllTicketTypesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<TicketTypeCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TicketTypesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllTicketsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<TicketCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TicketsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAttendeeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAttendeeByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryByNameArgs = {
  name: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventSearchIndexArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventSearchIndexByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOrderArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOrderByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOrderByStripeIdArgs = {
  stripeId: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOrganizerArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOrganizerByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRegistrationArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRegistrationByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRoleArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRoleByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTicketArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTicketByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTicketTypeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTicketTypeByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** All input for the `registerFunction` mutation. */
export type RegisterFunctionInput = {
  _address?: InputMaybe<Scalars["String"]["input"]>;
  _city?: InputMaybe<Scalars["String"]["input"]>;
  _dateOfBirth?: InputMaybe<Scalars["Date"]["input"]>;
  _email?: InputMaybe<Scalars["String"]["input"]>;
  _firstName?: InputMaybe<Scalars["String"]["input"]>;
  _gender?: InputMaybe<Gender>;
  _lastName?: InputMaybe<Scalars["String"]["input"]>;
  _organizationName?: InputMaybe<Scalars["String"]["input"]>;
  _password?: InputMaybe<Scalars["String"]["input"]>;
  _phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  _role?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our `registerFunction` mutation. */
export type RegisterFunctionPayload = {
  __typename?: "RegisterFunctionPayload";
  boolean?: Maybe<Scalars["Boolean"]["output"]>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type Registration = Node & {
  __typename?: "Registration";
  /** Reads a single `Attendee` that is related to this `Registration`. */
  attendeeByAttendeesId?: Maybe<Attendee>;
  attendeesId: Scalars["Int"]["output"];
  /** Reads a single `Event` that is related to this `Registration`. */
  eventByEventsId?: Maybe<Event>;
  eventsId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  quantity: Scalars["Int"]["output"];
  registrationDate: Scalars["Datetime"]["output"];
  /** Reads a single `Ticket` that is related to this `Registration`. */
  ticketByTicketsId?: Maybe<Ticket>;
  ticketsId: Scalars["Int"]["output"];
};

/**
 * A condition to be used against `Registration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RegistrationCondition = {
  /** Checks for equality with the object’s `attendeesId` field. */
  attendeesId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `eventsId` field. */
  eventsId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `quantity` field. */
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `registrationDate` field. */
  registrationDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `ticketsId` field. */
  ticketsId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An input for mutations affecting `Registration` */
export type RegistrationInput = {
  attendeesId: Scalars["Int"]["input"];
  eventsId: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  quantity: Scalars["Int"]["input"];
  registrationDate: Scalars["Datetime"]["input"];
  ticketsId: Scalars["Int"]["input"];
};

/** Represents an update to a `Registration`. Fields that are set will be updated. */
export type RegistrationPatch = {
  attendeesId?: InputMaybe<Scalars["Int"]["input"]>;
  eventsId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  registrationDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  ticketsId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A connection to a list of `Registration` values. */
export type RegistrationsConnection = {
  __typename?: "RegistrationsConnection";
  /** A list of edges which contains the `Registration` and cursor to aid in pagination. */
  edges: Array<RegistrationsEdge>;
  /** A list of `Registration` objects. */
  nodes: Array<Maybe<Registration>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Registration` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Registration` edge in the connection. */
export type RegistrationsEdge = {
  __typename?: "RegistrationsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Registration` at the end of the edge. */
  node?: Maybe<Registration>;
};

/** Methods to use when ordering `Registration`. */
export enum RegistrationsOrderBy {
  AttendeesIdAsc = "ATTENDEES_ID_ASC",
  AttendeesIdDesc = "ATTENDEES_ID_DESC",
  EventsIdAsc = "EVENTS_ID_ASC",
  EventsIdDesc = "EVENTS_ID_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  QuantityAsc = "QUANTITY_ASC",
  QuantityDesc = "QUANTITY_DESC",
  RegistrationDateAsc = "REGISTRATION_DATE_ASC",
  RegistrationDateDesc = "REGISTRATION_DATE_DESC",
  TicketsIdAsc = "TICKETS_ID_ASC",
  TicketsIdDesc = "TICKETS_ID_DESC",
}

export type Role = Node & {
  __typename?: "Role";
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  role: Scalars["String"]["output"];
  /** Reads and enables pagination through a set of `User`. */
  usersByRoleId: UsersConnection;
};

export type RoleUsersByRoleIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A condition to be used against `Role` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RoleCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<Scalars["String"]["input"]>;
};

/** An input for mutations affecting `Role` */
export type RoleInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  role: Scalars["String"]["input"];
};

/** Represents an update to a `Role`. Fields that are set will be updated. */
export type RolePatch = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `Role` values. */
export type RolesConnection = {
  __typename?: "RolesConnection";
  /** A list of edges which contains the `Role` and cursor to aid in pagination. */
  edges: Array<RolesEdge>;
  /** A list of `Role` objects. */
  nodes: Array<Maybe<Role>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Role` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Role` edge in the connection. */
export type RolesEdge = {
  __typename?: "RolesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Role` at the end of the edge. */
  node?: Maybe<Role>;
};

/** Methods to use when ordering `Role`. */
export enum RolesOrderBy {
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  RoleAsc = "ROLE_ASC",
  RoleDesc = "ROLE_DESC",
}

/** All input for the `searchEventIndices` mutation. */
export type SearchEventIndicesInput = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  searchTerm?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our `searchEventIndices` mutation. */
export type SearchEventIndicesPayload = {
  __typename?: "SearchEventIndicesPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  eventSearchIndices?: Maybe<Array<Maybe<EventSearchIndex>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `softDeleteAttendee` mutation. */
export type SoftDeleteAttendeeInput = {
  attendeeId?: InputMaybe<Scalars["Int"]["input"]>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our `softDeleteAttendee` mutation. */
export type SoftDeleteAttendeePayload = {
  __typename?: "SoftDeleteAttendeePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `softDeleteCategory` mutation. */
export type SoftDeleteCategoryInput = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our `softDeleteCategory` mutation. */
export type SoftDeleteCategoryPayload = {
  __typename?: "SoftDeleteCategoryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `softDeleteEvent` mutation. */
export type SoftDeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The output of our `softDeleteEvent` mutation. */
export type SoftDeleteEventPayload = {
  __typename?: "SoftDeleteEventPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `softDeleteOrder` mutation. */
export type SoftDeleteOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  orderId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The output of our `softDeleteOrder` mutation. */
export type SoftDeleteOrderPayload = {
  __typename?: "SoftDeleteOrderPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `softDeleteOrganizer` mutation. */
export type SoftDeleteOrganizerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  organizerId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The output of our `softDeleteOrganizer` mutation. */
export type SoftDeleteOrganizerPayload = {
  __typename?: "SoftDeleteOrganizerPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `softDeleteUser` mutation. */
export type SoftDeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The output of our `softDeleteUser` mutation. */
export type SoftDeleteUserPayload = {
  __typename?: "SoftDeleteUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type Ticket = Node & {
  __typename?: "Ticket";
  createdAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads a single `Event` that is related to this `Ticket`. */
  eventByEventsId?: Maybe<Event>;
  eventsId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  price: Scalars["Float"]["output"];
  quantity: Scalars["Int"]["output"];
  /** Reads and enables pagination through a set of `Registration`. */
  registrationsByTicketsId: RegistrationsConnection;
  /** Reads a single `TicketType` that is related to this `Ticket`. */
  ticketTypeByTicketTypesId?: Maybe<TicketType>;
  ticketTypesId: Scalars["Int"]["output"];
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
};

export type TicketRegistrationsByTicketsIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RegistrationCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RegistrationsOrderBy>>;
};

/** A condition to be used against `Ticket` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TicketCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `eventsId` field. */
  eventsId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks for equality with the object’s `quantity` field. */
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `ticketTypesId` field. */
  ticketTypesId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** An input for mutations affecting `Ticket` */
export type TicketInput = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  eventsId: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  price: Scalars["Float"]["input"];
  quantity: Scalars["Int"]["input"];
  ticketTypesId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Represents an update to a `Ticket`. Fields that are set will be updated. */
export type TicketPatch = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  eventsId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  ticketTypesId?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type TicketType = Node & {
  __typename?: "TicketType";
  createdAt?: Maybe<Scalars["Datetime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `Ticket`. */
  ticketsByTicketTypesId: TicketsConnection;
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
};

export type TicketTypeTicketsByTicketTypesIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<TicketCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TicketsOrderBy>>;
};

/**
 * A condition to be used against `TicketType` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TicketTypeCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** An input for mutations affecting `TicketType` */
export type TicketTypeInput = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Represents an update to a `TicketType`. Fields that are set will be updated. */
export type TicketTypePatch = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** A connection to a list of `TicketType` values. */
export type TicketTypesConnection = {
  __typename?: "TicketTypesConnection";
  /** A list of edges which contains the `TicketType` and cursor to aid in pagination. */
  edges: Array<TicketTypesEdge>;
  /** A list of `TicketType` objects. */
  nodes: Array<Maybe<TicketType>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TicketType` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `TicketType` edge in the connection. */
export type TicketTypesEdge = {
  __typename?: "TicketTypesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `TicketType` at the end of the edge. */
  node?: Maybe<TicketType>;
};

/** Methods to use when ordering `TicketType`. */
export enum TicketTypesOrderBy {
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UpdatedAtAsc = "UPDATED_AT_ASC",
  UpdatedAtDesc = "UPDATED_AT_DESC",
}

/** A connection to a list of `Ticket` values. */
export type TicketsConnection = {
  __typename?: "TicketsConnection";
  /** A list of edges which contains the `Ticket` and cursor to aid in pagination. */
  edges: Array<TicketsEdge>;
  /** A list of `Ticket` objects. */
  nodes: Array<Maybe<Ticket>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Ticket` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Ticket` edge in the connection. */
export type TicketsEdge = {
  __typename?: "TicketsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Ticket` at the end of the edge. */
  node?: Maybe<Ticket>;
};

/** Methods to use when ordering `Ticket`. */
export enum TicketsOrderBy {
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  EventsIdAsc = "EVENTS_ID_ASC",
  EventsIdDesc = "EVENTS_ID_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PriceAsc = "PRICE_ASC",
  PriceDesc = "PRICE_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  QuantityAsc = "QUANTITY_ASC",
  QuantityDesc = "QUANTITY_DESC",
  TicketTypesIdAsc = "TICKET_TYPES_ID_ASC",
  TicketTypesIdDesc = "TICKET_TYPES_ID_DESC",
  UpdatedAtAsc = "UPDATED_AT_ASC",
  UpdatedAtDesc = "UPDATED_AT_DESC",
}

/** All input for the `updateAttendeeById` mutation. */
export type UpdateAttendeeByIdInput = {
  /** An object where the defined keys will be set on the `Attendee` being updated. */
  attendeePatch: AttendeePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `updateAttendee` mutation. */
export type UpdateAttendeeInput = {
  /** An object where the defined keys will be set on the `Attendee` being updated. */
  attendeePatch: AttendeePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Attendee` to be updated. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our update `Attendee` mutation. */
export type UpdateAttendeePayload = {
  __typename?: "UpdateAttendeePayload";
  /** The `Attendee` that was updated by this mutation. */
  attendee?: Maybe<Attendee>;
  /** An edge for our `Attendee`. May be used by Relay 1. */
  attendeeEdge?: Maybe<AttendeesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Attendee`. */
  userByUsersId?: Maybe<User>;
};

/** The output of our update `Attendee` mutation. */
export type UpdateAttendeePayloadAttendeeEdgeArgs = {
  orderBy?: InputMaybe<Array<AttendeesOrderBy>>;
};

/** All input for the `updateCategoryById` mutation. */
export type UpdateCategoryByIdInput = {
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `updateCategoryByName` mutation. */
export type UpdateCategoryByNameInput = {
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: "UpdateCategoryPayload";
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateEventById` mutation. */
export type UpdateEventByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch;
  id: Scalars["Int"]["input"];
};

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch;
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  __typename?: "UpdateEventPayload";
  /** Reads a single `Category` that is related to this `Event`. */
  categoryByCategoriesId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** The `Event` that was updated by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Reads a single `Organizer` that is related to this `Event`. */
  organizerByOrganizersId?: Maybe<Organizer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the `updateEventSearchIndexById` mutation. */
export type UpdateEventSearchIndexByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `EventSearchIndex` being updated. */
  eventSearchIndexPatch: EventSearchIndexPatch;
  id: Scalars["Int"]["input"];
};

/** All input for the `updateEventSearchIndex` mutation. */
export type UpdateEventSearchIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `EventSearchIndex` being updated. */
  eventSearchIndexPatch: EventSearchIndexPatch;
  /** The globally unique `ID` which will identify a single `EventSearchIndex` to be updated. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our update `EventSearchIndex` mutation. */
export type UpdateEventSearchIndexPayload = {
  __typename?: "UpdateEventSearchIndexPayload";
  /** Reads a single `Category` that is related to this `EventSearchIndex`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `EventSearchIndex`. */
  eventByEventId?: Maybe<Event>;
  /** The `EventSearchIndex` that was updated by this mutation. */
  eventSearchIndex?: Maybe<EventSearchIndex>;
  /** An edge for our `EventSearchIndex`. May be used by Relay 1. */
  eventSearchIndexEdge?: Maybe<EventSearchIndicesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `EventSearchIndex` mutation. */
export type UpdateEventSearchIndexPayloadEventSearchIndexEdgeArgs = {
  orderBy?: InputMaybe<Array<EventSearchIndicesOrderBy>>;
};

/** All input for the `updateOrderById` mutation. */
export type UpdateOrderByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Order` being updated. */
  orderPatch: OrderPatch;
};

/** All input for the `updateOrderByStripeId` mutation. */
export type UpdateOrderByStripeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `Order` being updated. */
  orderPatch: OrderPatch;
  stripeId: Scalars["String"]["input"];
};

/** All input for the `updateOrder` mutation. */
export type UpdateOrderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Order` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Order` being updated. */
  orderPatch: OrderPatch;
};

/** The output of our update `Order` mutation. */
export type UpdateOrderPayload = {
  __typename?: "UpdateOrderPayload";
  /** Reads a single `Attendee` that is related to this `Order`. */
  attendeeByAttendeeId?: Maybe<Attendee>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `Order`. */
  eventByEventId?: Maybe<Event>;
  /** The `Order` that was updated by this mutation. */
  order?: Maybe<Order>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Order` mutation. */
export type UpdateOrderPayloadOrderEdgeArgs = {
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** All input for the `updateOrganizerById` mutation. */
export type UpdateOrganizerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Organizer` being updated. */
  organizerPatch: OrganizerPatch;
};

/** All input for the `updateOrganizer` mutation. */
export type UpdateOrganizerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Organizer` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Organizer` being updated. */
  organizerPatch: OrganizerPatch;
};

/** The output of our update `Organizer` mutation. */
export type UpdateOrganizerPayload = {
  __typename?: "UpdateOrganizerPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** The `Organizer` that was updated by this mutation. */
  organizer?: Maybe<Organizer>;
  /** An edge for our `Organizer`. May be used by Relay 1. */
  organizerEdge?: Maybe<OrganizersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Organizer`. */
  userByUsersId?: Maybe<User>;
};

/** The output of our update `Organizer` mutation. */
export type UpdateOrganizerPayloadOrganizerEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizersOrderBy>>;
};

/** All input for the `updateRegistrationById` mutation. */
export type UpdateRegistrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Registration` being updated. */
  registrationPatch: RegistrationPatch;
};

/** All input for the `updateRegistration` mutation. */
export type UpdateRegistrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Registration` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Registration` being updated. */
  registrationPatch: RegistrationPatch;
};

/** The output of our update `Registration` mutation. */
export type UpdateRegistrationPayload = {
  __typename?: "UpdateRegistrationPayload";
  /** Reads a single `Attendee` that is related to this `Registration`. */
  attendeeByAttendeesId?: Maybe<Attendee>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `Registration`. */
  eventByEventsId?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Registration` that was updated by this mutation. */
  registration?: Maybe<Registration>;
  /** An edge for our `Registration`. May be used by Relay 1. */
  registrationEdge?: Maybe<RegistrationsEdge>;
  /** Reads a single `Ticket` that is related to this `Registration`. */
  ticketByTicketsId?: Maybe<Ticket>;
};

/** The output of our update `Registration` mutation. */
export type UpdateRegistrationPayloadRegistrationEdgeArgs = {
  orderBy?: InputMaybe<Array<RegistrationsOrderBy>>;
};

/** All input for the `updateRoleById` mutation. */
export type UpdateRoleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Role` being updated. */
  rolePatch: RolePatch;
};

/** All input for the `updateRole` mutation. */
export type UpdateRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Role` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Role` being updated. */
  rolePatch: RolePatch;
};

/** The output of our update `Role` mutation. */
export type UpdateRolePayload = {
  __typename?: "UpdateRolePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was updated by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};

/** The output of our update `Role` mutation. */
export type UpdateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the `updateTicketById` mutation. */
export type UpdateTicketByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Ticket` being updated. */
  ticketPatch: TicketPatch;
};

/** All input for the `updateTicket` mutation. */
export type UpdateTicketInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Ticket` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Ticket` being updated. */
  ticketPatch: TicketPatch;
};

/** The output of our update `Ticket` mutation. */
export type UpdateTicketPayload = {
  __typename?: "UpdateTicketPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `Ticket`. */
  eventByEventsId?: Maybe<Event>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Ticket` that was updated by this mutation. */
  ticket?: Maybe<Ticket>;
  /** An edge for our `Ticket`. May be used by Relay 1. */
  ticketEdge?: Maybe<TicketsEdge>;
  /** Reads a single `TicketType` that is related to this `Ticket`. */
  ticketTypeByTicketTypesId?: Maybe<TicketType>;
};

/** The output of our update `Ticket` mutation. */
export type UpdateTicketPayloadTicketEdgeArgs = {
  orderBy?: InputMaybe<Array<TicketsOrderBy>>;
};

/** All input for the `updateTicketTypeById` mutation. */
export type UpdateTicketTypeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `TicketType` being updated. */
  ticketTypePatch: TicketTypePatch;
};

/** All input for the `updateTicketType` mutation. */
export type UpdateTicketTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `TicketType` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `TicketType` being updated. */
  ticketTypePatch: TicketTypePatch;
};

/** The output of our update `TicketType` mutation. */
export type UpdateTicketTypePayload = {
  __typename?: "UpdateTicketTypePayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TicketType` that was updated by this mutation. */
  ticketType?: Maybe<TicketType>;
  /** An edge for our `TicketType`. May be used by Relay 1. */
  ticketTypeEdge?: Maybe<TicketTypesEdge>;
};

/** The output of our update `TicketType` mutation. */
export type UpdateTicketTypePayloadTicketTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<TicketTypesOrderBy>>;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: "UpdateUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `User`. */
  roleByRoleId?: Maybe<Role>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = Node & {
  __typename?: "User";
  address?: Maybe<Scalars["String"]["output"]>;
  /** Reads and enables pagination through a set of `Attendee`. */
  attendeesByUsersId: AttendeesConnection;
  city?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Datetime"]["output"];
  deletedAt?: Maybe<Scalars["Datetime"]["output"]>;
  email: Scalars["String"]["output"];
  gender?: Maybe<Gender>;
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `Organizer`. */
  organizersByUsersId: OrganizersConnection;
  password: Scalars["String"]["output"];
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Role` that is related to this `User`. */
  roleByRoleId?: Maybe<Role>;
  roleId?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
  username: Scalars["String"]["output"];
};

export type UserAttendeesByUsersIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<AttendeeCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AttendeesOrderBy>>;
};

export type UserOrganizersByUsersIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<OrganizerCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OrganizersOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `gender` field. */
  gender?: InputMaybe<Gender>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `roleId` field. */
  roleId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserInfo = {
  __typename?: "UserInfo";
  address?: Maybe<Scalars["String"]["output"]>;
  attendeeInfo?: Maybe<Scalars["JSON"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars["Int"]["output"]>;
  organizerInfo?: Maybe<Scalars["JSON"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  email: Scalars["String"]["input"];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  password: Scalars["String"]["input"];
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  roleId?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  username: Scalars["String"]["input"];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  deletedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  roleId?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: "UsersConnection";
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: "UsersEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  AddressAsc = "ADDRESS_ASC",
  AddressDesc = "ADDRESS_DESC",
  CityAsc = "CITY_ASC",
  CityDesc = "CITY_DESC",
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  DeletedAtAsc = "DELETED_AT_ASC",
  DeletedAtDesc = "DELETED_AT_DESC",
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  GenderAsc = "GENDER_ASC",
  GenderDesc = "GENDER_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PasswordAsc = "PASSWORD_ASC",
  PasswordDesc = "PASSWORD_DESC",
  PhoneNumberAsc = "PHONE_NUMBER_ASC",
  PhoneNumberDesc = "PHONE_NUMBER_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  RoleIdAsc = "ROLE_ID_ASC",
  RoleIdDesc = "ROLE_ID_DESC",
  UpdatedAtAsc = "UPDATED_AT_ASC",
  UpdatedAtDesc = "UPDATED_AT_DESC",
  UsernameAsc = "USERNAME_ASC",
  UsernameDesc = "USERNAME_DESC",
}

export type RegisterOrganizerMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type RegisterOrganizerMutation = {
  __typename?: "Mutation";
  createUser?: {
    __typename?: "CreateUserPayload";
    user?: {
      __typename?: "User";
      id: number;
      username: string;
      email: string;
    } | null;
  } | null;
};

export type RegisterAttendeeMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type RegisterAttendeeMutation = {
  __typename?: "Mutation";
  createUser?: {
    __typename?: "CreateUserPayload";
    user?: {
      __typename?: "User";
      id: number;
      username: string;
      email: string;
    } | null;
  } | null;
};

export const RegisterOrganizerDocument = gql`
  mutation RegisterOrganizer($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        username
        email
      }
    }
  }
`;
export type RegisterOrganizerMutationFn = Apollo.MutationFunction<
  RegisterOrganizerMutation,
  RegisterOrganizerMutationVariables
>;

/**
 * __useRegisterOrganizerMutation__
 *
 * To run a mutation, you first call `useRegisterOrganizerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterOrganizerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerOrganizerMutation, { data, loading, error }] = useRegisterOrganizerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterOrganizerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterOrganizerMutation,
    RegisterOrganizerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterOrganizerMutation,
    RegisterOrganizerMutationVariables
  >(RegisterOrganizerDocument, options);
}
export type RegisterOrganizerMutationHookResult = ReturnType<
  typeof useRegisterOrganizerMutation
>;
export type RegisterOrganizerMutationResult =
  Apollo.MutationResult<RegisterOrganizerMutation>;
export type RegisterOrganizerMutationOptions = Apollo.BaseMutationOptions<
  RegisterOrganizerMutation,
  RegisterOrganizerMutationVariables
>;
export const RegisterAttendeeDocument = gql`
  mutation RegisterAttendee($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        username
        email
      }
    }
  }
`;
export type RegisterAttendeeMutationFn = Apollo.MutationFunction<
  RegisterAttendeeMutation,
  RegisterAttendeeMutationVariables
>;

/**
 * __useRegisterAttendeeMutation__
 *
 * To run a mutation, you first call `useRegisterAttendeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAttendeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAttendeeMutation, { data, loading, error }] = useRegisterAttendeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterAttendeeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterAttendeeMutation,
    RegisterAttendeeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterAttendeeMutation,
    RegisterAttendeeMutationVariables
  >(RegisterAttendeeDocument, options);
}
export type RegisterAttendeeMutationHookResult = ReturnType<
  typeof useRegisterAttendeeMutation
>;
export type RegisterAttendeeMutationResult =
  Apollo.MutationResult<RegisterAttendeeMutation>;
export type RegisterAttendeeMutationOptions = Apollo.BaseMutationOptions<
  RegisterAttendeeMutation,
  RegisterAttendeeMutationVariables
>;
