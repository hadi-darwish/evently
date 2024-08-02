import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({
          redirectTo: "/",
        });
      }}
    >
      <Button type="submit" className="rounded-full" size="sm">
        <LogOutIcon />
      </Button>
    </form>
  );
}
