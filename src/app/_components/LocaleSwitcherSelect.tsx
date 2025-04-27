"use client";

import { useParams } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Locale, routing, usePathname, useRouter } from "../../../i18n/route";

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
    setIsOpen(false);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
      <div className="relative inline-block text-left">
        <button
          type="button"
          aria-label={label}
          className="inline-flex items-center justify-between w-24 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center">
            <span
              className="fi mr-2"
              style={{ backgroundImage: `url(/flags/${defaultValue}.svg)` }}
            ></span>
            {defaultValue.toUpperCase()}
          </span>
          <svg
            className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none animate-fadeIn">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {routing.locales.map((locale) => (
                <button
                  key={locale}
                  className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ${
                    locale === defaultValue
                      ? "bg-blue-50 dark:bg-gray-700 font-medium"
                      : ""
                  }`}
                  role="menuitem"
                  onClick={() => onSelectChange(locale)}
                >
                  <span
                    className="fi mr-3"
                    style={{ backgroundImage: `url(/flags/${locale}.svg)` }}
                  ></span>
                  <span>
                    {locale.toUpperCase()} - {getLanguageName(locale)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to get full language name
function getLanguageName(locale: string): string {
  const names: Record<string, string> = {
    en: "English",
    fr: "Français",
    de: "Deutsch",
    ar: "العربية",
    es: "Español",
    ru: "Русский",
    zh: "中文",
    fa: "فارسی",
    tr: "Türkçe",
  };
  return names[locale] || locale;
}
