// Social.js
"use client";

import { FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex justify-around p-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-xl shadow-xl transform transition-all hover:scale-105">
      {/* Facebook */}
      <a
        href="https://web.facebook.com/profile.php?id=100009860147015"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-300 hover:text-blue-400 transition-transform transform hover:scale-110"
      >
        <FaFacebookF size={36} />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/NaveenDasunpriy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-400 hover:text-red-500 transition-transform transform hover:scale-110"
      >
        <FaYoutube size={36} />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-500 transition-transform transform hover:scale-110"
      >
        <FaTiktok size={36} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://www.whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-500 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={36} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/_.souron.__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-400 hover:text-pink-500 transition-transform transform hover:scale-110"
      >
        <FaInstagram size={36} />
      </a>
    </div>
  );
};

export default Social;
