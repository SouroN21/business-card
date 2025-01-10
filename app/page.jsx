"use client";

import { motion } from "framer-motion"; // Import motion for animations
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Name from "@/components/Name";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 overflow-hidden"
      initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly down
      animate={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Thunder Animation */}
      <div className="thunder"></div> {/* Add the thunder div here */}

      <div className="w-full max-w-md mt-8 relative z-10">
        {/* Photo Section */}
        <motion.div
          className="transform transition-all duration-500 hover:scale-105"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <Photo />
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="transform transition-all duration-500 hover:scale-105 mt-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Social />
        </motion.div>

        {/* Name Section */}
        <motion.div
          className="transform transition-all duration-500 hover:scale-105 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <Name />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="transform transition-all duration-500 hover:scale-105 mt-6"
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
