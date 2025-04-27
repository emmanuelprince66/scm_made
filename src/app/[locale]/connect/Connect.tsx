"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ConnectWallet from "../../_components/ConnectWallet";
import CustomModal from "../../_components/CustomModal";

// Wallet data with actual logo URLs

const wallets = [
  {
    name: "Bitget",
    logo: "/assets/bitget.png",
  },
  {
    name: "Ave",
    logo: "/assets/ave.jpeg",
  },
  {
    name: "TokenPocket",
    logo: "/assets/tokenpocket.png",
  },
  {
    name: "Bridgers",
    logo: "/assets/bridgers.png",
  },
  {
    name: "imToken",
    logo: "/assets/imToken.png",
  },
  {
    name: "Tronlink",
    logo: "/assets/tronlink.png",
  },
  {
    name: "Transit Swap",
    logo: "/assets/transitswap.jpg",
  },
  {
    name: "SWFT Wallet",
    logo: "/assets/swft.png",
  },
  {
    name: "SafePal",
    logo: "/assets/safepal.png",
  },
  {
    name: "SunPump",
    logo: "/assets/sunpump.jpeg",
  },
  {
    name: "OKX",
    logo: "/assets/okx.png",
  },
  {
    name: "Phantom",
    logo: "/assets/phantom.webp",
  },
  {
    name: "StepN",
    logo: "/assets/stepn.png",
  },
  {
    name: "Trust",
    logo: "/assets/trust.png",
  },
  {
    name: "iToken",
    logo: "/assets/itoken.png",
  },
  {
    name: "Rainbow",
    logo: "/assets/rainbow.png",
  },
  {
    name: "Argent",
    logo: "/assets/argent.png",
  },
  {
    name: "Metamask",
    logo: "/assets/metamask.png",
  },
  {
    name: "Gnosis Safe Multisig",
    logo: "/assets/gnosis.jpg",
  },
  {
    name: "Cryto.com/Defi Wallet",
    logo: "/assets/transform.png",
  },
  {
    name: "Pillar",
    logo: "/assets/pillar.png",
  },
  {
    name: "BitKeep",
    logo: "/assets/bitkeep.png",
  },
  {
    name: "Onto",
    logo: "/assets/onto.png",
  },
  {
    name: "Math Wallet",
    logo: "/assets/math.png",
  },
  {
    name: "BitPay",
    logo: "/assets/bitpay.jpg",
  },
  {
    name: "Maiar",
    logo: "/assets/maiar.png",
  },
  {
    name: "Ledger Live",
    logo: "/assets/ledger.png",
  },
  {
    name: "Ledger Wallet",
    logo: "/assets/ledger_wallet.png",
  },
];
//Define the Particle interface
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

const Connect = () => {
  const [activeTab, setActiveTab] = useState("wallet");
  const [particles, setParticles] = useState<Particle[]>([]); // Explicitly typed
  const [title, setTitle] = useState("");

  const [isConnecting, setIsConnecting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [activeTabTwo, setActiveTabTwo] = useState<
    "phrase" | "keystore" | "privateKey"
  >("phrase");
  const [manualConnect, setManualConnect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setShowError(true);
    }, 2000);
  };

  const handleOpenWalletModal = (name: string) => {
    setTitle(name);
    setIsModalOpen(true);
  };

  const handleManualConnect = () => {
    setManualConnect(true);
    setShowError(false);
  };

  // Generate random particles for the background
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []; // Can also type this if you want
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const t = useTranslations("connect");
  console.log("t----4--44", t);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blockchain grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bS02LTMwaC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptLTYtMzZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0zNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 / particle.speed,
              repeat: Infinity,
              ease: "linear",
              delay: particle.id * 0.2,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-8 max-w-6xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          {t("cn")}
        </motion.h1>

        <div className="flex justify-between mb-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <button
              className={`w-[48%] h-14 text-lg font-bold rounded-md transition-colors cursor-pointer ${
                activeTab === "wallet"
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
              }`}
              onClick={() => handleOpenWalletModal("Wallet")}
            >
              {t("wallet")}
            </button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full text-right"
          >
            <button
              className={`w-[48%] h-14 text-lg font-bold rounded-md transition-colors ${
                activeTab === "app"
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
              }`}
              onClick={() => handleOpenWalletModal("App")}
            >
              {t("app")}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">
            {activeTab === "wallet"
              ? "Connect your wallet"
              : "Connect your app"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wallets.map((wallet, index) => (
              <motion.div
                key={wallet.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * (index % 8) }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(138, 43, 226, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 cursor-pointer hover:border-purple-500 transition-all"
                  onClick={() => handleOpenWalletModal(wallet?.name)}
                >
                  <div className="flex items-center p-4">
                    <div className="w-10 h-10 mr-4 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <img
                        src={wallet.logo || "/placeholder.svg"}
                        alt={wallet.name}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${wallet.name}&background=random`;
                        }}
                      />
                    </div>
                    <span className="font-medium text-white">
                      {wallet.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating crypto icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["₿", "Ξ", "Ł", "Ð", "ⓩ"].map((symbol, index) => (
            <motion.div
              key={index}
              className="absolute text-white/10 text-4xl font-bold"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              animate={{
                y: ["0%", "100%"],
                opacity: [0, 0.2, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
                delay: index * 2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width=" min-w-[20rem] md:min-w-[50rem]"
        height="min-h-[70vh]"
      >
        <ConnectWallet
          handleManualConnect={handleManualConnect}
          setActiveTabTwo={setActiveTabTwo}
          title={title}
        />
      </CustomModal>
    </div>
  );
};

export default Connect;
