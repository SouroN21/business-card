"use client";

import { motion } from "framer-motion";

const Name = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white rounded-xl shadow-xl mt-5 transform transition-all hover:scale-105">
      {/* Name Heading */}
      <motion.h1
        className="text-5xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Naveen Dasunpriya
      </motion.h1>

      {/* Description Paragraph */}
      <motion.p
        className="text-xl font-medium text-transparent bg-gradient-to-r from-teal-400 via-green-500 to-white bg-clip-text"
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
