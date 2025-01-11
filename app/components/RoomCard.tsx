"use client";

import {
  HeartFilledIcon,
  HeartIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@radix-ui/themes";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  created_at: string;
}

export default function RoomCard({
  name,
  address,
  price_per_hour,
  image,
  created_at,
}: Props) {
  const createdAt = new Date(created_at); // Create Date from the string
  const isNew =
    (new Date().getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24) < 7; // Check if less than 7 days

  const [isliked, setLike] = useState(false);

  const [rating, setRating] = useState(0);
  useEffect(() => {
    const rate = Math.floor(Math.random() * 50);
    setRating(rate);
  }, []);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the event from bubbling up to the parent Link
    e.preventDefault();
    setLike(!isliked);
  };
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-[300px] h-[200px]">
        {/* Set fixed height to 400px */}
        <Image
          alt="View of a luxurious hotel with a pool by the sea"
          className="object-cover w-fill h-full" // Ensure the image covers the entire space and is centered
          src={image}
          width={600}
          height={400}
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -{rating}% discount
        </div>
        <div className="absolute top-2 right-2">
          <div className="p-2 bg-white rounded">
            {isliked ? (
              <HeartFilledIcon
                color="red"
                className="w-5 h-4 z-20"
                onClick={handleLikeClick}
              />
            ) : (
              <HeartIcon
                color="black"
                className="w-5 h-4 z-20"
                onClick={handleLikeClick}
              />
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm">Entire cabin · 10 beds</p>
        <div className="flex items-center mt-2 space-x-2">
          {isNew ? (
            <Badge color="green">NEW</Badge>
          ) : (
            <Badge color="orange">OLD</Badge>
          )}
          <h2 className="text-gray-900 font-semibold text-lg">{name}</h2>
        </div>
        <div className="flex justify-start items-start">
          <MapPin color="gray" className="w-4 h-4 mt-1.5" />
          <p className="text-gray-500 text-sm mt-1 h-10 w-60">{address}</p>
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
