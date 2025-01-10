// Social.js
"use client";

import { FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // For smooth animations

const Social = () => {
  return (
    <div className="flex justify-around p-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-xl shadow-xl">
      {/* Facebook */}
      <motion.a
        href="https://web.facebook.com/profile.php?id=100009860147015"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-300 hover:text-blue-400 transition-all"
        whileHover={{ scale: 1.1 }} // Slight scaling on hover
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaFacebookF size={36} />
      </motion.a>

      {/* YouTube */}
      <motion.a
        href="https://www.youtube.com/@NaveenDasunpriy?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-400 hover:text-red-500 transition-all"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaYoutube size={36} />
      </motion.a>

      {/* TikTok */}
      <motion.a
        href="https://www.tiktok.com/@souron21?"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-500 transition-all"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaTiktok size={36} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/94766876368"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-500 transition-all"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaWhatsapp size={36} />
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/_.souron.__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-400 hover:text-pink-500 transition-all"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaInstagram size={36} />
      </motion.a>
    </div>
  );
};

export default Social;
