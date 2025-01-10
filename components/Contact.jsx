"use client";

import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg mt-5 p-8 text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>

      <div className="bg-gray-800 p-4 rounded-lg mb-4 flex items-center gap-4">
        <FaPhoneAlt className="text-green-400" />
        <span className="text-lg">0779748492</span>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-4 flex items-center gap-4">
        <FaMapMarkerAlt className="text-red-400" />
        <span className="text-lg">123 Main Street, Badulla</span>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
        <FaGlobe className="text-blue-400" />
        <a
          href="https://www.yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:underline"
        >
          www.yourwebsite.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
