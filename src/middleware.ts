// middleware.ts - ONLY FOR DEVELOPMENT
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "../i18n/route";

export default function middleware(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.next(); // Bypass in production
  }

  // Development-only redirects
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}/home`, req.url)
    );
  }

  return createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale,
    localePrefix: "as-needed",
  })(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
