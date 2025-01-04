"use server";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";
import getAllRooms from "../actions/getAllRooms";
import Image from "next/image";
import Link from "next/link";

const RoomsSection = async () => {
  const rooms = await getAllRooms();

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  return (
    <section className="max-w-5xl mx-auto px-4 mt-12">
      <div className="flex justify-between items-center py-10">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-2xl text-sky-600">Special Offers</h3>
          <h1 className="text-4xl font-semibold">Best offer of the month</h1>
          <p className="max-w-2xl font-light">
            Experience Fantastic Benefits and Obtain Better Rates When You Make
            a Direct Booking on Our Official Website
          </p>
        </div>
        <Button size="4">View All</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {rooms && rooms.length > 0 ? (
          rooms.slice(0, 3).map((room) => {
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
          })
        ) : (
          <h2 className="text-center text-xl text-gray-600">
            No rooms available!
          </h2>
        )}
      </div>
    </section>
  );
};

export default RoomsSection;
