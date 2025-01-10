"use client";

import Photo from "@/components/photo";
import Social from "@/components/Social";
import Name from "@/components/Name";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md mt-8">
        <Photo />
        <Social />
        <Name />
        <Contact />
      </div>
    </div>
  );
}
