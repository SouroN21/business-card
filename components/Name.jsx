"use client";

import { motion } from "framer-motion";

const Name = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white rounded-xl shadow-2xl mt-5 hover:shadow-lg">
      <motion.h1
        className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wider mb-4 text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ color: "#00BFFF" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="name-color-animation">
          Naveen Dasunpriya
        </span>
      </motion.h1>

      <motion.div
        className="h-1 w-40 mt-1 rounded gradient-animation"
        initial={{ scaleX: 0, scaleY: 0.5 }}
        animate={{ scaleX: 1, scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

export default Name;
