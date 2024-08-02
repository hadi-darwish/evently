"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSession, SessionProvider } from "next-auth/react";

const NavItems = () => {
  const pathname = usePathname();
  const session = useSession();

  let headerLinks = [
    {
      label: "Home",
      route: "/",
    },
  ];
  // @ts-ignore
  const isOrganizer = session?.data?.user?.organizerInfo !== null;

  if (isOrganizer) {
    headerLinks = [
      ...headerLinks,
      {
        label: "Create Event",
        route: "/events/create",
      },
    ];
  }

  headerLinks = [
    ...headerLinks,
    {
      label: "My Profile",
      route: "/profile",
    },
  ];
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link, index) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
