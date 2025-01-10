"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface Props {
  user_id: string;
  name: string;
  description: string;
  sqft: number;
  capacity: number;
  location: string;
  address: string;
  amenities: string;
  availability: string;
  price_per_hour: number;
  image: string;
}

export default function RoomCard({
  name,
  address,
  price_per_hour,
  image,
}: Props) {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full">
        <Image
          alt="View of a luxurious hotel with a pool by the sea"
          className="w-full h-48 object-cover"
          src={image} // Use room image if available
          width={600}
          height={600}
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -10% today
        </div>
        <div className="absolute top-2 right-2">
          <i className="far fa-heart text-white"></i>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm">Entire cabin · 10 beds</p>
        <div className="flex items-center mt-2">
          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            NEW
          </span>
          <h2 className="text-gray-900 font-semibold text-lg">{name}</h2>
        </div>
        <div className="flex justify-start items-center">
          <MapPin color="gray" className="w-4 h-4" />
          <p className="text-gray-500 text-sm mt-1">{address}</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="text-gray-900 font-bold text-lg">${price_per_hour}</p>
          <span className="text-gray-500 text-sm ml-1">/night</span>
          <div className="flex items-center ml-auto">
            <StarFilledIcon color="gold" className="w-5 h-5" />
            <p className="text-gray-900 ml-1">4.8</p>
            <p className="text-gray-500 text-sm ml-1">(28)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
