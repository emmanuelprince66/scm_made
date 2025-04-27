"use client";

import type React from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  width = "w-[90%] sm:w-[450px] md:w-[500px] lg:w-[550px]",
  height = "max-h-[90vh] h-auto",
  children,
}) => {
  if (!isOpen) return null;

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div
        className={`relative ${width} ${height} rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 shadow-2xl border border-gray-700 overflow-auto`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-gray-700/50"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
