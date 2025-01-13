import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@radix-ui/themes";
import Link from "next/link";

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
  link: string;
}
const RoomsCard = ({
  name,
  description,
  // address,
  // price_per_hour,
  image,
  created_at,
  link,
}: Props) => {
  const createdAt = new Date(created_at);
  const year = createdAt.getFullYear();

  const isNew =
    (new Date().getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24) < 7; // Check if less than 7 days

  return (
    <div className="bg-white rounded-lg shadow shadow-slate-400 flex flex-col lg:grid lg:grid-cols-3">
      <div className="relative w-full">
        <Image
          src={image}
          alt="Aerial view of a luxury beach resort with thatched roof buildings and white sandy beach"
          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden"
          width={500}
          height={500}
        />
        <div className="absolute top-2 left-2">
          {isNew ? (
            <Badge color="green">NEW</Badge>
          ) : (
            <Badge color="orange">OLD</Badge>
          )}
          <div className="absolute top-8 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            -10% discount
          </div>
        </div>
        <div className="absolute bottom-2 left-2">
          <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
            {year}
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <i className="fas fa-heart text-white text-xl"></i>
        </div>
      </div>
      <div className="p-4 w-full  lg:flex flex-col gap-y-2 hidden items-center justify-center">
        <Link href={link}>
          <Button
            size="lg"
            className="rounded-full bg-yellow-500 hover:bg-yellow-300 text-slate-900 "
          >
            Show prices
          </Button>
        </Link>
        <p className="text-gray-600 mb-2">Enter dates to see prices</p>
      </div>
      <div className="p-4 w-full">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span>View on map</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            <StarFilledIcon color="gold" className="w-5 h-5" />
            <StarFilledIcon color="gold" className="w-5 h-5" />
            <StarFilledIcon color="gold" className="w-5 h-5" />
            <StarFilledIcon color="gold" className="w-5 h-5" />
            <StarFilledIcon color="gold" className="w-5 h-5" />
          </div>
          <span className="text-gray-600">2,868 reviews</span>
        </div>
        <p className="text-gray-600 mb-4">
          #1 Best Value of 1 place to stay in Bolifushi Island
        </p>
        <p className="text-gray-600 mb-4 truncate ">
          <span className="font-bold ">Description:</span> {description}
        </p>
        <div className="block lg:hidden space-y-2">
          <Link href={link}>
            <Button
              size="lg"
              className="rounded-full bg-yellow-500 hover:bg-yellow-300 text-slate-900 "
            >
              Show prices
            </Button>
            <p className="text-gray-600 mb-2">Enter dates to see prices</p>
          </Link>
        </div>
        <a href="#" className="text-blue-500 font-bold">
          Visit hotel website
        </a>
      </div>
    </div>
  );
};

export default RoomsCard;
