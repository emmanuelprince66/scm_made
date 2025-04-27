"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Before = () => {
  const t = useTranslations("GettingStarted");
  console.log("t----4--44", t);
  // Progress steps data
  const progressSteps = [
    {
      number: 1,
      title: t("progressSteps.0.title"),
      description: t("progressSteps.0.description"),
    },
    {
      number: 2,
      title: t("progressSteps.1.title"),
      description: t("progressSteps.1.description"),
    },
    {
      number: 3,
      title: t("progressSteps.2.title"),
      description: t("progressSteps.2.description"),
    },
  ];

  return (
    <section className="bg-[#FAFAFB] py-16 md:py-24 overflow-hidden w-full">
      <div className="container max-w-8xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Content Box */}
          <motion.div
            className="flex flex-col items-start max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-[2.5rem] font-bold mb-10 text-[#000] md:text-[4rem] lg:text-[4rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t("title")}
            </motion.h2>

            {/* Vertical Progress Steps */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {progressSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1273FF] text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="pt-1.5">
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image Box */}
          <motion.div
            className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* Decorative elements */}
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-1/4 -left-12 w-24 h-24 rounded-full bg-[#1273FF]/10 blur-xl" />
              <div className="absolute bottom-1/4 -right-12 w-32 h-32 rounded-full bg-[#1273FF]/15 blur-xl" />
            </div>

            {/* Image with floating animation */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={"/assets/before.png"}
                alt="Crypto App Interface"
                className="w-full h-auto object-cover rounded-2xl"
                width={500}
                height={650}
                priority
              />

              {/* Glowing highlight effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#1273FF]/20 to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Before;
