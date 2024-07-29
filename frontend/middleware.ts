import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  ignoredRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

const matchRoute = (route: string, pathname: string) => {
  const routeRegex = new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`);
  return routeRegex.test(pathname);
};

export default auth(async (req: NextRequest) => {
  const { nextUrl } = req;
  //@ts-ignore
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.some((route) =>
    matchRoute(route, nextUrl.pathname)
  );
  const isAuthRoute = authRoutes.some((route) =>
    matchRoute(route, nextUrl.pathname)
  );
  const isIgnoredRoute = ignoredRoutes.some((route) =>
    matchRoute(route, nextUrl.pathname)
  );

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  if (isIgnoredRoute) {
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
