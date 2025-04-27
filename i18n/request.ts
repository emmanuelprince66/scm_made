// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./route";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Make sure your messages are in the right location
    messages: (await import(`../src/app/messages/${locale}.json`)).default,
  };
});
// ../messages/${locale}.json
