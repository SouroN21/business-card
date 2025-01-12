"use client";

import { motion } from "framer-motion";

const Name = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white rounded-xl shadow-2xl mt-5 transform transition-all hover:scale-105 hover:shadow-lg">
      <motion.h1
        className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wider mb-4 text-white hover:tracking-widest transition-all duration-300 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Naveen Dasunpriya
      </motion.h1>

      <motion.div
        className="h-1 w-24 mt-2 bg-white rounded"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </div>
  );
};

export default Name;
