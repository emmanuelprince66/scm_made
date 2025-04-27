"use client";

import { useTranslations } from "next-intl";

const ShowLoader = () => {
  const t = useTranslations("ShowLoader");

  return (
    <div className="flex w-full justify-between items-center mt-5 flex-col gap-6 ">
      <p className="text-3xl font-black">{t("loading")}</p>
      <div className="animate-pulse flex space-x-2">
        <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
        <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
        <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
      </div>

      <p>{t("loading")}</p>
      <p>{t("timeoutMessage")}</p>
    </div>
  );
};

export default ShowLoader;
