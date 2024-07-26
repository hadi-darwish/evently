import NextAuth from "next-auth";
import { CredentialsSignin, type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";

import {
  MutationLoginFunctionArgs,
  LoginFunctionInput,
  LoginFunctionPayload,
} from "@/schemas/generated/graphql";
import client from "./apolloClient";
import { LOGIN_MUTATION } from "./mutations/login";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedLoginData = LoginSchema.safeParse(credentials);
        if (!validatedLoginData.success) {
          throw new CredentialsSignin("Invalid login data");
        }

        const { email, password } = validatedLoginData.data;

        const input: LoginFunctionInput = {
          _email: email,
          _password: password,
        };

        try {
          const { data, errors } = await client.mutate<
            { loginFunction: LoginFunctionPayload },
            MutationLoginFunctionArgs
          >({
            mutation: LOGIN_MUTATION,
            variables: { input },
          });

          if (errors) {
            console.error("GraphQL Errors:", errors);
            throw new CredentialsSignin("GraphQL error occurred");
          }

          if (data?.loginFunction?.userInfo) {
            const { userInfo } = data.loginFunction;
            console.log(userInfo);

            return {
              user_id: userInfo.id,
              email: userInfo.email,
              name: userInfo.username,
              role: userInfo.role,
              phoneNumber: userInfo.phoneNumber,
              address: userInfo.address,
              city: userInfo.city,
              gender: userInfo.gender,
              organizerInfo: userInfo.organizerInfo,
              attendeeInfo: userInfo.attendeeInfo,
            };
          } else {
            throw new CredentialsSignin("Invalid credentials");
          }
        } catch (error) {
          throw new CredentialsSignin("An error occurred during login");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    //TODO: Extend the user type to include the additional fields
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // @ts-ignore
        token.user_id = user.user_id;
        token.email = user.email;
        token.name = user.name;
        // @ts-ignore
        token.role = user.role;
        // @ts-ignore
        token.phoneNumber = user.phoneNumber;
        // @ts-ignore
        token.address = user.address;
        // @ts-ignore
        token.city = user.city;
        // @ts-ignore
        token.gender = user.gender;
        // @ts-ignore
        token.organizerInfo = user.organizerInfo;
        // @ts-ignore
        token.attendeeInfo = user.attendeeInfo;
      }

      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.id = token.id;
      // @ts-ignore
      session.user.user_id = token.user_id;
      // @ts-ignore
      session.user.email = token.email;
      session.user.name = token.name;
      // @ts-ignore
      session.user.role = token.role;
      // @ts-ignore
      session.user.phoneNumber = token.phoneNumber;
      // @ts-ignore
      session.user.address = token.address;
      // @ts-ignore
      session.user.city = token.city;
      // @ts-ignore
      session.user.gender = token.gender;
      // @ts-ignore
      session.user.organizerInfo = token.organizerInfo;
      // @ts-ignore
      session.user.attendeeInfo = token.attendeeInfo;

      return session;
    },
  },
} satisfies NextAuthConfig;
