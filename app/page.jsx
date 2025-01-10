"use client";

import { motion } from "framer-motion"; // Import motion for animations
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Name from "@/components/Name";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800"
      initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly down
      animate={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
      transition={{ duration: 1, ease: "easeOut" }} // Smooth animation with easeOut timing
    >
      <div className="w-full max-w-md mt-8">
        {/* Photo Section */}
        <motion.div
          className="transform transition-all duration-500 hover:scale-105"
          initial={{ opacity: 0, x: -50 }} // Start from left and invisible
          animate={{ opacity: 1, x: 0 }} // Slide in from left to original position
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Delayed entrance
        >
          <Photo />
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="transform transition-all duration-500 hover:scale-105 mt-6"
          initial={{ opacity: 0, x: 50 }} // Start from right and invisible
          animate={{ opacity: 1, x: 0 }} // Slide in from right to original position
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Delayed entrance
        >
          <Social />
        </motion.div>

        {/* Name Section */}
        <motion.div
          className="transform transition-all duration-500 hover:scale-105 mt-6"
          initial={{ opacity: 0, y: 50 }} // Start from below and invisible
          animate={{ opacity: 1, y: 0 }} // Fade in and move up
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }} // Delayed entrance
        >
          <Name />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="transform transition-all duration-500 hover:scale-105 mt-6"
          initial={{ opacity: 0, y: 50 }} // Start from below and invisible
          animate={{ opacity: 1, y: 0 }} // Fade in and move up
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }} // Delayed entrance
        >
          <Contact />
        </motion.div>
      </div>
    </motion.div>
  );
}
