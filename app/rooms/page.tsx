import { Button } from "@/components/ui/button";
import { ArrowDown, Info, MapIcon } from "lucide-react";
import Image from "next/image";

import FillterDropdown from "../components/FillterDropdown";
import RoomsCard from "../components/RoomsCard";
import getAllRooms from "../actions/getAllRooms";
import Pagination from "../components/Pagination";
import NoThingIsHere from "../components/NoThingIsHere";

const ServicesList = [
  { label: "Dining", imageSrc: "/dining.jpg" },
  { label: "Room", imageSrc: "/rooms/room-2.jpg" },
  { label: "Service & Facilities", imageSrc: "/rooms/service-facilitys.jpg" },
  { label: "Conferences & Meetings", imageSrc: "/rooms/room-3.jpg" },
  { label: "Wedding Package", imageSrc: "/rooms/wedding.jpg" },
];

interface SearchParamsProps {
  searchParams: { page: string };
}

const Page = async ({ searchParams }: SearchParamsProps) => {
  const currentPage = parseInt(searchParams.page || "1");
  const pageSize = 2;

  // Fetch paginated rooms
  const rooms = await getAllRooms({ page: currentPage, pageSize });
  console.log(rooms.length);

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentRooms = rooms.slice(startIndex, endIndex); // Get rooms for the current page

  return (
    <div className="bg-[#f2f2f2] max-w-7xl  mx-3 lg:mx-auto grid grid-cols-1 gap-4 mt-40 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-col">
      {/* Filter Section on the Left */}
      <div className="lg:col-span-1 lg:row-span-3">
        <div className="bg-sky-200 w-full py-20 flex justify-center items-center">
          <Button className="bg-white  border-slate-900 rounded-full text-slate-900 hover:text-white">
            <MapIcon />
            View map
          </Button>
        </div>
        <div className="m-4 flex flex-row lg:flex-col">
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
        {ServicesList.map((service) => (
          <div
            key={service.label}
            className="relative flex justify-center items-center rounded-md shadow-md shadow-gray-400 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-100 transition-opacity"></div>
            <Image
              src={service.imageSrc}
              alt="Wedding Room"
              width={400}
              height={450}
              className="object-cover w-full h-full"
            />
            <p className="absolute bottom-0 text-sm lg:text-xl text-white mb-6">
              {service.label}
            </p>
          </div>
        ))}
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
        {rooms.length > 0 ? (
          currentRooms.map((room) => {
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
                link={`/rooms/${room.$id}`}
              />
            );
          })
        ) : (
          <NoThingIsHere label={"No rooms available."} />
        )}
      </div>
      <div className="lg:col-span-2 my-6">
        {rooms.length > 0 ? (
          <Pagination
            itemCount={rooms.length}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        ) : (
          <p>No rooms available.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
