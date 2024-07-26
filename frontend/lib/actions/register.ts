"use server";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { REGISTER_MUTATION } from "@/lib/mutations/register";
import client from "@/apolloClient";
import {
  Gender,
  MutationRegisterFunctionArgs,
  RegisterFunctionInput,
  RegisterFunctionPayload,
} from "@/schemas/generated/graphql";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const {
    email,
    password,
    phoneNumber,
    address,
    city,
    gender,
    type,
    organizationName,
    day,
    month,
    year,
    firstName,
    lastName,
  } = validatedFields.data;

  if (type === "organization" && !organizationName) {
    return {
      error: "Organization name is required.",
    };
  }
  if (type === "user" && (!day || !month || !year)) {
    return {
      error: "Date of birth is required.",
    };
  }

  let dateOfBirthString = `${year}-${month}-${day}`;
  let dateOfBirth = new Date(dateOfBirthString);

  const input: RegisterFunctionInput = {
    _email: email,
    _password: password,
    _phoneNumber: phoneNumber,
    _address: address,
    _city: city,
    _gender: gender.toUpperCase() as Gender,
    _role: type,
    _organizationName: organizationName,
    _dateOfBirth: type === "user" ? dateOfBirth : undefined,
    _firstName: type === "user" ? firstName : undefined,
    _lastName: type === "user" ? lastName : undefined,
  };

  try {
    const { data } = await client.mutate<
      {
        registerFunction: RegisterFunctionPayload;
      },
      MutationRegisterFunctionArgs
    >({
      mutation: REGISTER_MUTATION,
      variables: {
        input,
      },
    });

    if (data?.registerFunction.boolean) {
      return {
        success: "Register successful!",
      };
    } else {
      return {
        error: "Registration failed.",
      };
    }
  } catch (error: any) {
    const errorMessage =
      error.graphQLErrors?.[0]?.message ||
      "An error occurred during registration.";

    return {
      error: errorMessage,
    };
  }
};
