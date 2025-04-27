import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server"; // <-- Import NextRequest
import { routing } from "../i18n/route";

const intlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  pathnames: routing.pathnames,
  localePrefix: "as-needed",
  localeDetection: false,
});

export default function middleware(req: NextRequest) {
  // <-- Change to NextRequest
  const { pathname } = req.nextUrl; // <-- Use nextUrl from NextRequest

  // Redirect root URL to default locale's home page
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}/home`, req.url)
    );
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
