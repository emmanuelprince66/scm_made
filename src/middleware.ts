// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "../i18n/route";

export default createMiddleware({
  // List of all locales
  locales: routing.locales,

  // Default locale
  defaultLocale: routing.defaultLocale,

  // Pathnames configuration
  pathnames: routing.pathnames,

  // Add this to prevent locale prefix being added multiple times
  localePrefix: "as-needed",

  // Add this to always use the cleanest URL format
  localeDetection: false,
});

export const config = {
  // Match all paths except:
  // - API routes
  // - Static files
  // - Next.js internals
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
