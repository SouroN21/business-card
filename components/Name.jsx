// Name.js
"use client";

import { motion } from "framer-motion"; // For animations

const Name = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white rounded-xl shadow-xl mt-5 transform transition-all hover:scale-105">
      <motion.h1
        className="text-4xl font-extrabold tracking-wide mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Naveen Dasunpriya
      </motion.h1>
      <motion.p
        className="text-lg font-medium text-cyan-300"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        BSc (Hons) in Information Technology at SLIIT (UG)
      </motion.p>
    </div>
  );
};

export default Name;
