"use client";

import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Name from "@/components/Name";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-300 to-transparent opacity-50 z-0 animate-gradient-move" />

      {/* Adding an additional animated background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-200 opacity-30 z-0 animate-gradient-move delay-3000" />

      <div className="w-full max-w-md mt-1 relative z-10 space-y-6">
        <motion.div
          className="transform transition-all duration-500 hover:scale-110"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <Photo />
        </motion.div>

        <motion.div
          className="transform transition-all duration-500 hover:scale-110 mt-5 rounded-xl shadow-lg bg-white bg-opacity-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <Name />
        </motion.div>

        <motion.div
          className="transform transition-all duration-500 hover:scale-110 hover:shadow-2xl mt-5 rounded-xl shadow-lg bg-white bg-opacity-30 backdrop-blur-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Social />
        </motion.div>

        <motion.div
          className="transform transition-all duration-500 hover:scale-110 hover:shadow-2xl mt-5 rounded-xl shadow-lg bg-white bg-opacity-30 backdrop-blur-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <Contact />
        </motion.div>
      </div>
    </motion.div>
  );
}
