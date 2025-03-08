"use client";

import { FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className="flex justify-around p-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-xl shadow-xl">
      <motion.a
        href="https://web.facebook.com/profile.php?id=100009860147015"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-800"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
      >
        <FaFacebookF size={40} />
      </motion.a>

      <motion.a
        href="https://www.youtube.com/@NaveenDasunpriya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-600"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.2, rotate: -5 }}
      >
        <FaYoutube size={40} />
      </motion.a>

      <motion.a
        href="https://www.tiktok.com/@souron21?"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-black"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
      >
        <FaTiktok size={40} />
      </motion.a>

      <motion.a
        href="https://wa.me/94766876368"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-600"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
        whileHover={{ scale: 1.2, rotate: -5 }}
      >
        <FaWhatsapp size={40} />
      </motion.a>

      <motion.a
        href="https://www.instagram.com/_.souron.__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
      >
        <FaInstagram size={40} />
      </motion.a>
    </div>
  );
};

export default Social;
