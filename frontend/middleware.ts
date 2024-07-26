// import { NextResponse } from "next/server";
// import { auth, BASE_PATH } from "@/auth";

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// const publicRoutes = [
//   "/",
//   "/events/:id",
//   "/api/weebhook/stripe",
//   "/api/uploadthing",
// ]; // Add your public routes here

// const ignoredRoutes = ["/api/weebhook/stripe", "/api/uploadthing"]; // Add your ignored routes here

// export default auth((req) => {
//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;
//   const reqUrl = new URL(req.url);
//   const isPublicRoute = publicRoutes.some((route) =>
//     reqUrl.pathname.startsWith(route)
//   );
//   const isIgnoredRoute = ignoredRoutes.some((route) =>
//     reqUrl.pathname.startsWith(route)
//   );

//   if (isIgnoredRoute) {
//     return NextResponse.next(); // Completely bypass middleware for ignored routes
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     // Redirect to login page if not logged in and the route is not public
//     return NextResponse.redirect(
//       new URL(
//         `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
//           reqUrl.pathname
//         )}`,
//         req.url
//       )
//     );
//   }

//   return NextResponse.next();
// });

import NextAuth from "next-auth";
import authConfig from "./auth.config";
// import { auth } from "./auth";
import { getToken } from "next-auth/jwt"; // Import getToken from next-auth/jwt

import {
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  ignoredRoutes,
} from "./routes";
import { NextRequest, NextResponse } from "next/server";
const { auth } = NextAuth(authConfig);
export default auth(async (req: NextRequest) => {
  const { nextUrl } = req;
  // const token = await getToken({
  //   req,
  //   secret: process.env.AUTH_SECRET ?? "",
  //   salt: "",
  // });
  //@ts-ignore
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
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
