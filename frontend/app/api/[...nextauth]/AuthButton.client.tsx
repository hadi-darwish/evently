"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AuthButtonClient() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Button disabled>Loading...</Button>;
  }

  return session?.user ? (
    <Button
      className="rounded-full"
      size="lg"
      onClick={async () => {
        await signOut();
      }}
    >
      {session.user.name} : Sign Out
    </Button>
  ) : (
    <Button
      className="rounded-full"
      size="lg"
      onClick={async () => await signIn()}
    >
      Login
    </Button>
  );
}
