"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-lg mt-5 p-8 text-white shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="text-xl font-extrabold text-center mb-5">Contact Information</h2>

      <motion.a
        href="tel:+94766876368"
        className="bg-blue-800 p-5 rounded-lg mb-5 flex items-center gap-4 hover:shadow-xl hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaPhoneAlt className="text-green-400 text-2xl" />
        <span className="text-lg font-medium text-white hover:text-green-300">{'+94766876368'}</span>
      </motion.a>

      <motion.a
        href="https://maps.app.goo.gl/n8s8uS4U7ua2id1B8"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 p-5 rounded-lg mb-5 flex items-center gap-4 hover:shadow-xl hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaMapMarkerAlt className="text-red-400 text-2xl" />
        <span className="text-lg font-medium text-white hover:text-red-300">331/A Kanupella, Badulla</span>
      </motion.a>

      <motion.a
        href="https://naveen-xi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 p-5 rounded-lg flex items-center gap-4 hover:shadow-xl hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaGlobe className="text-blue-400 text-2xl" />
        <span className="text-lg font-medium text-cyan-300 hover:text-blue-300">www.naveen.me</span>
      </motion.a>
    </motion.div>
  );
};

export default Contact;
