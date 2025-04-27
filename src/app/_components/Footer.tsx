"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("BeforeFooter");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Social media links
  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#f8f9fa] dark:bg-gray-900 py-12 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-2">
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-8 h-8 text-[#0068FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.2V15.7C16,16.4 15.4,17 14.8,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
              </svg>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                TokenPocket
              </span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          {/* <motion.div variants={itemVariants}>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 text-gray-600 dark:text-gray-300">
              <a
                href="#"
                className="hover:text-[#0068FF] dark:hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-[#0068FF] dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-[#0068FF] dark:hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:text-[#0068FF] dark:hover:text-white transition-colors"
              >
                Security
              </a>
              <a
                href="#"
                className="hover:text-[#0068FF] dark:hover:text-white transition-colors"
              >
                Support
              </a>
            </nav>
          </motion.div> */}

          {/* Social Media Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${social.label}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#0068FF] hover:text-white dark:hover:bg-[#0068FF] transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-6"
          />

          {/* Copyright Section */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} TokenPocket. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
              {t("description")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
