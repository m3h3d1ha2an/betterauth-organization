import { getCookieCache } from "better-auth/cookies";
import { type NextRequest, NextResponse } from "next/server";

export const proxy = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  const isRootRoute = pathname === "/";
  const isAuthRoute = pathname.startsWith("/auth");

  const isAppBaseRoute = pathname === "/app";

  const sessionCookie = await getCookieCache(request);

  if (!sessionCookie && !isAuthRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (sessionCookie) {
    if (isRootRoute) {
      return NextResponse.redirect(new URL("/app/dashboard", request.url));
    }

    if (isAppBaseRoute) {
      return NextResponse.redirect(new URL("/app/dashboard", request.url));
    }

    if (isAuthRoute) {
      return NextResponse.redirect(new URL("/app/dashboard", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
