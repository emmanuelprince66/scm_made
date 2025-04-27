"use client";
import Link from "next/link";
import { motion } from "framer-motion"; // ← Correct import (named import)
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between p-6  container mx-auto max-w-8xl"
    >
      <Link href="/" className="flex items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2"
        >
          <div className="h-5 w-full rounded-full  flex items-center justify-center">
            <Image
              src={"/assets/logo.png"}
              alt="Logo"
              className="h-full w-full object-cover"
              width={100}
              height={100}
            />
          </div>
        </motion.div>
      </Link>
      <div className="flex-1"></div>
    </motion.nav>
  );
}
