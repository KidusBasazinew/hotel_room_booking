"use client";

import Image from "next/image";
import { PersonIcon } from "@radix-ui/react-icons";
import { Room } from "@/Types/Room";

interface RoomCardProps {
  room: {
    $id: string;
    name: string;
    description: string;
    sqft?: number;
    capacity: number;
    location?: string;
    address: string;
    amenities: string;
    availability: string;
    price_per_hour: number;
    image: string;
  };
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="flex flex-col gap-y-2 p-6 bg-white rounded-2xl shadow-xl shadow-gray-400 w-full max-w-sm hover:scale-105 transition-transform">
      <Image
        src={`/rooms/${room.image}`}
        width={400}
        height={250}
        alt={room.name}
        className="rounded-xl"
      />
      <p className="text-gray-500">Room</p>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{room.name}</h3>
        <div className="flex items-center gap-x-1">
          <PersonIcon />
          <p>{room.capacity}</p>
        </div>
      </div>
      <p className="text-sm font-light truncate">{room.description}</p>
      <h2 className="text-3xl text-center mt-6 font-bold">
        ${room.price_per_hour}
        <span className="text-xs font-light">/night</span>
      </h2>
    </div>
  );
}
