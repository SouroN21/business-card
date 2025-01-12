"use client";

import { motion } from "framer-motion";

const Name = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-lightblue-100 via-lightblue-300 to-lightblue-400 text-white rounded-2xl shadow-2xl mt-5 transform transition-all hover:scale-105 hover:shadow-lg">
      {/* Name Heading */}
      <motion.h1
        className="text-5xl font-extrabold tracking-wider mb-4 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 bg-clip-text text-transparent hover:tracking-widest transition-all duration-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Naveen Dasunpriya
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-xl font-semibold text-gray-100 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Innovative IT Solutions
      </motion.p>

      {/* Animated underline */}
      <motion.div
        className="h-1 w-24 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </div>
  );
};

export default Name;
