"use client";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";
import {
  FaKey,
  FaMoneyBillWaveAlt,
  FaShieldAlt,
  FaWallet,
} from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { HiArrowsPointingOut } from "react-icons/hi2";

import { FaBell } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { LuLockKeyhole } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { TbArrowsCross } from "react-icons/tb";

import { FaDatabase } from "react-icons/fa6";
import { FiKey } from "react-icons/fi";
const Section = () => {
  const t = useTranslations("Features");
  console.log("t----4--44", t);
  const cardData = [
    {
      id: 1,
      icon: <FaWallet className="text-2xl text-[#1273FF]" />,
      title: t("cards.activate.title"),
      description: t("cards.activate.desc"),
    },
    {
      id: 2,
      icon: <FaArrowsRotate className="text-2xl text-[#1273FF]" />,
      title: t("cards.sync.title"),
      description: t("cards.sync.desc"),
    },
    {
      id: 4,
      icon: <GoArrowSwitch className="text-2xl text-[#1273FF]" />,
      title: t("cards.bridge.title"),
      description: t("cards.bridge.desc"),
    },
    {
      id: 5,
      icon: <HiArrowsPointingOut className="text-2xl text-[#1273FF]" />,
      title: t("cards.whitelist.title"),
      description: t("cards.whitelist.desc"),
    },
    {
      id: 6,
      icon: <TbArrowsCross className="text-2xl text-[#1273FF]" />,
      title: t("cards.migrate.title"),
      description: t("cards.migrate.desc"),
    },
    {
      id: 7,
      icon: <FaMoneyBillWaveAlt className="text-2xl text-[#1273FF]" />,
      title: t("cards.withdrawal.title"),
      description: t("cards.withdrawal.desc"),
    },
    {
      id: 8,
      icon: <FaShieldAlt className="text-2xl text-[#1273FF]" />,
      title: t("cards.fundsRecovery.title"),
      description: t("cards.fundsRecovery.desc"),
    },
    {
      id: 9,
      icon: <FaKey className="text-2xl text-[#1273FF]" />,
      title: t("cards.multiSig.title"),
      description: t("cards.multiSig.desc"),
    },
    {
      id: 10,
      icon: <FiKey className="text-2xl text-[#1273FF]" />,
      title: t("cards.updateContract.title"),
      description: t("cards.updateContract.desc"),
    },
    {
      id: 11,
      icon: <LuLockKeyhole className="text-2xl text-[#1273FF]" />,
      title: t("cards.recoverPassword.title"),
      description: t("cards.recoverPassword.desc"),
    },
    {
      id: 12,
      icon: <FaChartLine className="text-2xl text-[#1273FF]" />,
      title: t("cards.tokenPrice.title"),
      description: t("cards.tokenPrice.desc"),
    },
    {
      id: 13,
      icon: <MdPeopleAlt className="text-2xl text-[#1273FF]" />,
      title: t("cards.collaborate.title"),
      description: t("cards.collaborate.desc"),
    },
    {
      id: 14,
      icon: <FaDatabase className="text-2xl text-[#1273FF]" />,
      title: t("cards.exchange.title"),
      description: t("cards.exchange.desc"),
    },
    {
      id: 15,
      icon: <FaWallet className="text-2xl text-[#1273FF]" />,
      title: t("cards.purchaseTokens.title"),
      description: t("cards.purchaseTokens.desc"),
    },
    {
      id: 16,
      icon: <FaBell className="text-2xl text-[#1273FF]" />,
      title: t("cards.walletAlerts.title"),
      description: t("cards.walletAlerts.desc"),
    },
    {
      id: 17,
      icon: <MdPeopleAlt className="text-2xl text-[#1273FF]" />,
      title: t("cards.staking.title"),
      description: t("cards.staking.desc"),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-[#1273FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[2.5rem] text-center max-w-[80%] mx-auto font-bold leading-tight text-[#fff] dark:text-light md:text-[4rem] lg:text-[4rem]">
            {t("title")}
          </p>
        </motion.div>

        {/* Grid Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(18, 115, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-[#1273FF]/10 rounded-full">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-[#1273FF] font-medium">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
