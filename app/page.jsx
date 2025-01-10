// Home.js
"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Name from "@/components/Name";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">
      <div className="w-full max-w-md mt-8 animate__animated animate__fadeIn">
        {/* Photo Section */}
        <div className="transform transition-all duration-500 hover:scale-105">
          <Photo />
        </div>

        {/* Social Media Links */}
        <div className="transform transition-all duration-500 hover:scale-105 mt-6">
          <Social />
        </div>

        {/* Name Section */}
        <div className="transform transition-all duration-500 hover:scale-105 mt-6">
          <Name />
        </div>

        {/* Contact Information */}
        <div className="transform transition-all duration-500 hover:scale-105 mt-6">
          <Contact />
        </div>
      </div>
    </div>
  );
}
