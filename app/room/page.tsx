import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Info, MapIcon } from "lucide-react";
import Image from "next/image";

import FillterDropdown from "../components/FillterDropdown";
import { StarFilledIcon } from "@radix-ui/react-icons";
import RoomsCard from "../components/RoomsCard";
import getAllRooms from "../actions/getAllRooms";

const Page = async () => {
  const rooms = await getAllRooms();
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  return (
    <div className="bg-[#f2f2f2] max-w-7xl mx-auto grid grid-cols-1 gap-4 mt-40 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-col">
      {/* Filter Section on the Left */}
      <div className="lg:col-span-1 lg:row-span-3">
        <div className="bg-sky-200 w-full py-20 flex justify-center items-center">
          <Button className="bg-white  border-slate-900 rounded-full text-slate-900 hover:text-white">
            <MapIcon />
            View map
          </Button>
        </div>
        <div className="m-4">
          <FillterDropdown
            title="Popular"
            options={[
              { id: "wifi", label: "Free Wifi" },
              { id: "luxury", label: "Luxury" },
              { id: "pool", label: "Pool" },
            ]}
          />
          <FillterDropdown
            title="Amenities"
            options={[
              { id: "wifi", label: "Free Wifi" },
              { id: "luxury", label: "Breakfast Included" },
              { id: "pool", label: "Pool" },
              { id: "restaurant", label: "Restaurant" },
            ]}
          />
        </div>
      </div>

      {/* Wedding Images Section */}
      <div className="lg:col-span-2 flex gap-4">
        <div className="relative flex justify-center items-center rounded-md shadow-md shadow-gray-400 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-100 transition-opacity"></div>
          <Image
            src={"/rooms/wedding.jpg"}
            alt="Wedding Room"
            width={400}
            height={450}
            className="object-cover w-full h-full"
          />
          <p className="absolute bottom-0 text-xl text-white mb-6">
            Travelers&apos; Choice
          </p>
        </div>
        <div className="relative flex justify-center items-center rounded-md shadow-md shadow-gray-400 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-100 transition-opacity"></div>
          <Image
            src={"/rooms/wedding.jpg"}
            alt="Wedding Room"
            width={400}
            height={450}
            className="object-cover w-full h-full"
          />
          <p className="absolute bottom-0 text-xl text-white mb-6">
            Travelers&apos; Choice
          </p>
        </div>
        {/* Add more wedding images as needed */}
      </div>

      {/* Rooms Cards Section */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex justify-between items-center">
          <h1>1 property in Bolifushi Island</h1>
          <div className="flex items-center gap-x-2">
            <p>Sort by:</p>
            <Button className="rounded-full bg-white hover:text-white text-slate-900">
              Best Of <ArrowDown />
            </Button>
            <Info />
          </div>
        </div>
        {rooms.map((room) => {
          const imageUrl = room.image
            ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
            : "/images/no-image.jpg";
          return (
            <RoomsCard
              key={room.id}
              user_id={room.user_Id}
              name={room.name}
              description={room.description}
              sqft={room.sqft}
              capacity={room.capacity}
              location={room.location}
              address={room.address}
              amenities={room.amenities}
              availability={room.availability}
              price_per_hour={room.price_per_hour}
              image={imageUrl}
              created_at={room.created_at}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
