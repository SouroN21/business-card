"use client";

import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-lg mt-5 p-8 text-white shadow-xl transform transition-all hover:scale-105">
      
      <h2 className="text-2xl font-extrabold text-center mb-6">Contact Information</h2>

      <div className="bg-blue-800 p-5 rounded-lg mb-5 flex items-center gap-4 hover:shadow-xl transform transition-all hover:bg-blue-700">
        <FaPhoneAlt className="text-green-400 text-2xl" />
        <span className="text-lg font-medium">+94766876368</span>
      </div>

      <div className="bg-blue-800 p-5 rounded-lg mb-5 flex items-center gap-4 hover:shadow-xl transform transition-all hover:bg-blue-700">
        <FaMapMarkerAlt className="text-red-400 text-2xl" />
        <span className="text-lg font-medium">331/A Kanupella, Badulla</span>
      </div>

      <div className="bg-blue-800 p-5 rounded-lg flex items-center gap-4 hover:shadow-xl transform transition-all hover:bg-blue-700">
        <FaGlobe className="text-blue-400 text-2xl" />
        <a
          href="https://www.yourwebsite.com/naveendasunpriy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-cyan-300 hover:underline"
        >
          www.yourwebsite.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
