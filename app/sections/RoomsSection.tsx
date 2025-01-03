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
        {rooms ? (
          rooms.slice(0, 3).map((room) => {
            const imageUrl = room.image
              ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
              : "/images/no-image.jpg";
            return (
              <Link key={room.$id} href={`/rooms/${room.$id}`}>
                <div className="flex flex-col gap-y-2 p-6 bg-white rounded-2xl shadow-xl shadow-gray-400 w-full max-w-sm hover:scale-105 transition-transform">
                  <Image
                    src={imageUrl}
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
                  <p className="text-sm font-light truncate">
                    {room.description}
                  </p>
                  <h2 className="text-3xl text-center mt-6 font-bold">
                    ${room.price_per_hour}
                    <span className="text-xs font-light">/night</span>
                  </h2>
                </div>
              </Link>
            );
          })
        ) : (
          <h2>No room found!</h2>
        )}
      </div>
    </section>
  );
};

export default RoomsSection;
