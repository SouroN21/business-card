"use client";

import { FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className="flex justify-around p-8 bg-gradient-to-r from-lightblue-300 via-lightblue-400 to-lightblue-500 rounded-xl shadow-xl">
      {/* Facebook */}
      <motion.a
        href="https://web.facebook.com/profile.php?id=100009860147015"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 transition-all"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <FaFacebookF size={36} />
      </motion.a>

      {/* YouTube */}
      <motion.a
        href="https://www.youtube.com/@NaveenDasunpriy?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-600 transition-all"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
      >
        <FaYoutube size={36} />
      </motion.a>

      {/* TikTok */}
      <motion.a
        href="https://www.tiktok.com/@souron21?"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-600 transition-all"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <FaTiktok size={36} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/94766876368"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600 transition-all"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
      >
        <FaWhatsapp size={36} />
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/_.souron.__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-400 hover:text-pink-500 transition-all"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <FaInstagram size={36} />
      </motion.a>
    </div>
  );
};

export default Social;
