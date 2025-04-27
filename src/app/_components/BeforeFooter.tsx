"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../../../i18n/route";

const BeforeFooter = () => {
  const t = useTranslations("BeforeFooter");
  return (
    <div className="bg-white w-full py-12 md:py-24 px-4 overflow-hidden">
      <motion.div
        className="max-w-8xl container mx-auto bg-[#0068FF] rounded-3xl relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background gradient decorations */}

        <div className="flex flex-col md:flex-row justify-between items-center  h-[400px] md:h-full  p-6 md:p-6 lg:p-10">
          {/* Left Content */}
          <motion.div
            className="flex flex-col items-start gap-6 w-full  z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("title")}
            </motion.h2>

            <motion.p
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t("description")}
            </motion.p>

            <Link href="/connect">
              <motion.button
                className="mt-4 bg-white text-[#0068FF]  font-bold py-4 px-8 rounded-xl shadow-lg flex items-center gap-2 overflow-hidden relative group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {/* Button background animation */}
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-white to-[#e6f0ff] group-hover:w-full transition-all duration-700 ease-in-out rounded-xl"></span>

                {/* Button icon */}
                <svg
                  className="w-5 h-5 relative z-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21,18V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18H21M12,16H22V8H12V16M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z" />
                </svg>

                <span className="relative z-10">{t("button")}</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <div className="w-full md:w-3/4 relative mt-8 md:mt-0 md:-mb-1 flex justify-center md:justify-end">
            <Image
              src={"/assets/phone.png"}
              alt="TokenPocket Mobile App"
              className="absolute top-[-6.5rem] z-10 object-contain"
              priority
              width={530}
              height={570}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BeforeFooter;
