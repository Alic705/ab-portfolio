import React from "react";
import { motion } from "framer-motion";

const MaintenanceModal = ({ onView }) => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative max-w-lg w-full bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl text-center overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-500/20 blur-[80px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/20 blur-[80px] rounded-full" />

        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block mb-6"
        >
          <div className="w-20 h-20 bg-linear-to-tr from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
        </motion.div>

        <h2 className="text-4xl font-bold text-white mb-4 anton tracking-wider uppercase">
          Under Maintenance
        </h2>

        <p className="text-gray-400 text-lg mb-8 geist leading-relaxed">
          My site is currently down for scheduled maintenance. Thanks for your
          patience!
        </p>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={onView}
            className="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 geist uppercase tracking-widest text-sm">
              View Portfolio Anyway
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 bg-white transition-all group-hover:scale-x-0 origin-left" />
          </button>

          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-linear-to-r from-transparent via-orange-500 to-transparent"
            />
          </div>
          <span className="text-sm text-gray-500 font-mono tracking-widest uppercase opacity-60">
            Portflio • System Update
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default MaintenanceModal;
