import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "../auth/login-button";
import { Button } from "../ui/button";
import { auth, signOut } from "@/auth";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { LogOutIcon } from "lucide-react";
import LogoutButton from "../auth/logout-button";

const Header = async () => {
  const session = await auth();
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>

        {session !== null && (
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        )}
        {session !== null && (
          <div className="flex w-32 justify-end gap-3">
            <LogoutButton />
            <MobileNav />
          </div>
        )}

        {!session && (
          <div className="flex w-32 justify-end gap-3">
            <LoginButton>
              <Button className="rounded-full" size="lg">
                Login
              </Button>
            </LoginButton>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
