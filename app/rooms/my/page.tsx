import React from "react";
import getMyRooms from "@/app/actions/getMyRooms";
import Image from "next/image";
import { PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const My = async () => {
  const rooms = await getMyRooms();

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        My Created Rooms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => {
          const imageUrl = room.image
            ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
            : "/images/no-image.jpg";
          return (
            <Link key={room.$id} href={`/rooms/${room.$id}`}>
              <div
                key={room.$id}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs h-[400px] hover:scale-105 transition-transform duration-300"
              >
                {/* Room Image */}
                <Image
                  src={imageUrl}
                  alt={room.name}
                  width={400}
                  height={250}
                  className="w-full h-44 object-cover"
                />
                {/* Room Details */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <p>Room</p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {room.name}
                      </h3>
                      <div className="flex justify-center items-center">
                        <p className="text-gray-600 text-sm">
                          Capacity: <strong>{room.capacity}</strong>
                        </p>
                        <PersonIcon />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 line-clamp-3">
                      {room.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-4xl text-center font-bold text-sky-600">
                      ${room.price_per_hour}
                      <span className="text-sm text-gray-500 font-light">
                        {" "}
                        / night
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default My;
