import { NextResponse } from "next/server";
import { auth, BASE_PATH } from "@/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

const publicRoutes = [
  "/",
  "/events/:id",
  "/api/weebhook/stripe",
  "/api/uploadthing",
]; // Add your public routes here

const ignoredRoutes = ["/api/weebhook/stripe", "/api/uploadthing"]; // Add your ignored routes here

export default auth((req) => {
  const reqUrl = new URL(req.url);
  const isPublicRoute = publicRoutes.some((route) =>
    reqUrl.pathname.startsWith(route)
  );
  const isIgnoredRoute = ignoredRoutes.some((route) =>
    reqUrl.pathname.startsWith(route)
  );

  if (isIgnoredRoute) {
    return NextResponse.next(); // Completely bypass middleware for ignored routes
  }

  if (!req.auth && !isPublicRoute) {
    return NextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
          reqUrl.pathname
        )}`,
        req.url
      )
    );
  }

  return NextResponse.next();
});
