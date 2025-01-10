// Contact.js
"use client";

import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-lg mt-5 p-8 text-white shadow-xl transform transition-all hover:scale-105">
      <h2 className="text-2xl font-extrabold text-center mb-6">Contact Information</h2>

      {/* Phone Number */}
      <div className="bg-blue-800 p-5 rounded-lg mb-5 flex items-center gap-4 hover:shadow-xl transform transition-all hover:bg-blue-700">
        <FaPhoneAlt className="text-green-400 text-2xl" />
        <a
          href="tel:+94766876368"
          className="text-lg font-medium text-white hover:underline"
        >
          +94766876368
        </a>
      </div>

      {/* Address */}
      <div className="bg-blue-800 p-5 rounded-lg mb-5 flex items-center gap-4 hover:shadow-xl transform transition-all hover:bg-blue-700">
        <FaMapMarkerAlt className="text-red-400 text-2xl" />
        <a
          href="https://maps.app.goo.gl/n8s8uS4U7ua2id1B8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-white hover:underline"
        >
          331/A Kanupella, Badulla
        </a>
      </div>

      {/* Website Link */}
      <div className="bg-blue-800 p-5 rounded-lg flex items-center gap-4 hover:shadow-xl transform transition-all hover:bg-blue-700">
        <FaGlobe className="text-blue-400 text-2xl" />
        <a
          href="https://naveen-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-cyan-300 hover:underline"
        >
          WWW.naveen-xi.vercel.app
        </a>
      </div>
    </div>
  );
};

export default Contact;
