"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaSync, FaWallet } from "react-icons/fa";
import { Link } from "../../../i18n/route";

export default function Hero() {
  const t = useTranslations("Hero");

  const params = useParams();
  console.log("params", params);
  console.log("t----4--44", t);
  async function getSubmissions() {
    try {
      const response = await fetch("/api/get-submissions", {
        next: { revalidate: 10 }, // Revalidate every 10 seconds
      });

      console.log("response", response);

      if (!response.ok) {
        throw new Error("Failed to fetch submissions");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching submissions:", error);
      return [];
    }
  }
  useEffect(() => {
    getSubmissions();
  }, []);

  return (
    <section className="relative container mx-auto px-3 md:px-6 py-12 md:py-24 max-w-8xl overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#1273FF]/10 blur-xl animate-float1" />
        <div className="absolute bottom-1/4 right-20 w-40 h-40 rounded-full bg-[#1273FF]/15 blur-xl animate-float2" />

        {/* Abstract Grid Pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#1273FF"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Gradient Squares Cluster - Top Right */}
        <div className="absolute top-7 right-10 md:top-10 md:right-20">
          {/* Large Square */}
          <svg
            className="w-24 h-24 md:w-32 md:h-32 opacity-80 animate-float4"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient
                id="squareGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1273FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6e00ff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="10"
              fill="url(#squareGradient1)"
              stroke="#1273FF"
              strokeWidth="2"
            />
          </svg>

          {/* Medium Square */}
          <svg
            className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 opacity-60 animate-float5"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient
                id="squareGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1273FF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00b4ff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="8"
              fill="url(#squareGradient2)"
              stroke="#1273FF"
              strokeWidth="1.5"
            />
          </svg>

          {/* Small Square */}
          <svg
            className="absolute -bottom-6 -left-6 w-12 h-12 md:w-14 md:h-14 opacity-40 animate-float6"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient
                id="squareGradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6e00ff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1273FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="6"
              fill="url(#squareGradient3)"
              stroke="#6e00ff"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-12 md:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 relative"
        >
          {/* Decorative Icon */}
          <svg
            className="absolute -top-11 -left-8 w-16 h-16 text-[#1273FF]/20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.2V15.7C16,16.4 15.4,17 14.8,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"
            />
          </svg>

          <p className="text-[2.5rem] text-center md:text-left font-bold leading-tight text-[#1273FF] md:text-[4rem] lg:text-[4rem] relative">
            {t("title")}
            {/* Underline decoration */}
            <svg
              className="hidden md:block absolute -bottom-4 left-0 w-64 h-2"
              viewBox="0 0 256 8"
            >
              <path
                d="M0,4 C42,4 84,0 128,4 C172,8 214,4 256,4"
                fill="none"
                stroke="#1273FF"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </p>

          <p className="text-[1.2rem] md:text-[1.5rem] text-black dark:text-black-300 text-center md:text-left mb-10">
            {t("subtitle")}
          </p>

          <motion.div className="flex flex-col items-center gap-4 md:gap-6 md:flex-row md:justify-start relative">
            <Link href="/connect">
              {/* Connect Wallet Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#000",
                  boxShadow: "0 10px 20px -5px rgba(18, 115, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 cursor-pointer justify-center border-none rounded-sm bg-[#1273FF] min-w-[300px] px-6 py-3 h-14 text-white shadow-lg relative overflow-hidden group"
              >
                {/* Animated sparkles */}
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute -inset-2 bg-[#4d9bff] opacity-0 group-hover:opacity-20 group-hover:animate-spin-slow transition-all duration-300 rounded-sm"></span>
                </span>
                <FaWallet className="text-xl" />
                {t("connectWallet")}
              </motion.button>
            </Link>

            {/* Synchronize Wallet Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#000",
                color: "#FFFFFF",
                borderColor: "#1273FF",
                boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 min-w-[10rem ] justify-center cursor-pointer border-none rounded-sm min-w-[300px] bg-black h-14 px-6 py-3 text-white border border-gray-800 relative overflow-hidden group"
            >
              {/* Animated gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#1273FF] to-[#0d5bd6] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                <FaSync className="text-xl" />
                {t("syncWallet")}
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image - Fixed placement outside of left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex-1 mt-12 md:mt-0 relative"
        >
          {/* Floating crypto icons around image */}
          <svg
            className="absolute -top-6 -left-6 w-12 h-12 text-[#1273FF]/30 animate-float3"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z"
            />
          </svg>

          <div className="relative h-[300px] w-full md:h-[650px] rounded-2xl">
            <Image
              src={"/assets/header.png"}
              alt="Crypto Wallet Interface"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
