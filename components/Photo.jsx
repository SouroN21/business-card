"use client";

import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/ND.png"
        alt="Description of the image"
        width={300}
        height={200}
        className="rounded-lg shadow-lg"
        priority
      />
    </div>
  );
};

export default Photo;
