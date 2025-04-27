// src/i18n/route.ts
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr", "de", "ar", "es", "ru", "zh", "fa", "tr"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    // Define specific paths
    "/": "/",
    "/home": {
      en: "/home",
      fr: "/accueil",
      de: "/startseite",
      ar: "/الرئيسية",
      es: "/inicio",
      ru: "/домашняя",
      zh: "/首页",
      fa: "/خانه",
      tr: "/anasayfa",
    },
    "/connect": {
      en: "/connect",
      fr: "/connecter",
      de: "/verbinden",
      ar: "/اتصال",
      es: "/conectar",
      ru: "/соединить",
      zh: "/连接",
      fa: "/اتصال",
      tr: "/bağlan",
    },
    "/activate": {
      en: "/activate",
      fr: "/activer",
      de: "/aktivieren",
      ar: "/تفعيل",
      es: "/activar",
      ru: "/активировать",
      zh: "/激活",
      fa: "/فعال‌سازی",
      tr: "/etkinleştir",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
