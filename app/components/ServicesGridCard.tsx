import Image from "next/image";
import React from "react";

interface Props {
  rowSpan?: string;
  label: string;
  imageSrc: string;
}

const ServicesGridCard = ({ rowSpan, label, imageSrc }: Props) => {
  return (
    <div
      className={`relative ${rowSpan} flex justify-center items-center rounded-3xl shadow-md shadow-gray-400 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-100  transition-opacity"></div>
      <Image
        src={imageSrc}
        alt=""
        width={400}
        height={450}
        className="object-cover w-full h-full"
      />
      <p className="absolute bottom-0 text-xl text-white mb-6">{label}</p>
    </div>
  );
};

export default ServicesGridCard;
