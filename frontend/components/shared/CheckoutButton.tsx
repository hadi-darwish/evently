"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Checkout from "./Checkout";
import { Event } from "@/schemas/generated/graphql";
import { useSession, SessionProvider } from "next-auth/react";
import { LoginButton } from "../auth/login-button";

const CheckoutButton = ({ event }: { event: Event | undefined }) => {
  const session = useSession();

  console.log("session", session);

  // @ts-ignore
  const userId = session?.data?.user?.user_id;
  const hasEventFinished = new Date(event?.endDatetime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          {session.status === "unauthenticated" && (
            <LoginButton>
              <Button className="button rounded-full" size="lg">
                Get Tickets
              </Button>
            </LoginButton>
          )}
          {userId !== null && session.status === "authenticated" && (
            <Checkout event={event} userId={userId} />
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
