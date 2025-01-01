import React from "react";

import Image from "next/image";
import { Button } from "@radix-ui/themes";
import { PersonIcon } from "@radix-ui/react-icons";
import getAllRooms from "../actions/getAllRooms";
import Link from "next/link";

const page = async () => {
  const rooms = await getAllRooms();

  return (
    <>
      <div className="relative">
        <Image
          src="/banner/image_03.jpg"
          className="w-full h-96 object-cover"
          alt=""
          width={1200}
          height={100}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="flex flex-col items-center gap-y-4 absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-5xl text-white text-center">
            Discover Your Perfect Stay with Us
          </h1>
          <Button size="4">Get Start</Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-gray-700 text-center leading-normal py-20">
          Experience the Pinnacle of{" "}
          <span className="text-sky-600">Luxury</span> and{" "}
          <span className="text-sky-600">Comfort</span>
          <br /> in Our Exquisite Rooms
        </h1>
      </div>
      <div>
        <h1 className="text-bold text-5xl text-gray-700 text-center">
          Our Rooms
        </h1>
      </div>
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <div className="flex justify-between items-center py-10">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl text-sky-600">Special Offers</h3>
            <h1 className="text-4xl font-semibold">Best offer of the month</h1>
            <p className="max-w-2xl font-light">
              Experience Fantastic Benefits and Obtain Better Rates When You
              Make a Direct Booking on Our Official Website
            </p>
          </div>
          <Button size="4">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {rooms ? (
            rooms.slice(0, 3).map((room) => (
              <Link href={`/rooms/${room.$id}`} key={room.$id}>
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
                  <p className="text-sm font-light truncate">
                    {room.description}
                  </p>
                  <h2 className="text-3xl text-center mt-6 font-bold">
                    ${room.price_per_hour}
                    <span className="text-xs font-light">/night</span>
                  </h2>
                </div>
              </Link>
            ))
          ) : (
            <h2>No room found!</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
