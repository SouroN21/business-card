"use client";

import { FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex justify-around p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl shadow-lg">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110"
      >
        <FaFacebookF size={32} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
      >
        <FaYoutube size={32} />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-500 transition-transform transform hover:scale-110"
      >
        <FaTiktok size={32} />
      </a>
      <a
        href="https://www.whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={32} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110"
      >
        <FaInstagram size={32} />
      </a>
    </div>
  );
};

export default Social;
