"use client";

import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center mb-5">
      <div className="transform transition-all duration-500 hover:scale-105 hover:rotate-3d hover:shadow-xl">
        <Image
          src="/ND.png"
          alt="Description of the image"
          width={400}
          height={400}
          className="rounded-lg shadow-lg border-4 border-cyan-400 hover:border-blue-500"
          priority
        />
      </div>
    </div>
  );
};

export default Photo;
