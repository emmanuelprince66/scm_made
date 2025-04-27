// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "../i18n/route";

const intlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  pathnames: routing.pathnames,
  localePrefix: "as-needed",
  localeDetection: false,
});

export default function middleware(request: NextRequest) {
  // Handle root path redirect
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }

  // Apply next-intl middleware for all other paths
  return intlMiddleware(request);
}

export const config = {
  // Include root path in matcher
  matcher: [
    "/", // Explicitly match root path
    "/((?!api|_next|_vercel|.*\\..*).*)", // All other paths
  ],
};
