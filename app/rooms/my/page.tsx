import React from "react";
import getMyRooms from "@/app/actions/getMyRooms";
import Image from "next/image";
import { PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

const My = async () => {
  const rooms = await getMyRooms();

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  return (
    <main>
      {/* Hero Section */}
      <header
        style={{
          backgroundImage: "url('/banner/image_01.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-[500px] bg-gradient-to-r from-blue-600 to-sky-500 text-white"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to Your Room Management
          </h1>
          <p className="text-lg text-gray-100 text-center mb-6 max-w-3xl">
            View and manage your created rooms with ease. Start booking or make
            changes to your existing rooms in just a few clicks!
          </p>
          <Link href="/add">
            <Button size="4">Create a New Room</Button>
          </Link>
        </div>
      </header>
      {/* My Created Rooms Section */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          My Created Rooms
        </h2>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <p className="text-sm text-gray-500">Room</p>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 h-10">
                          {room.name}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-600">
                          <p className="text-sm">Capacity: {room.capacity}</p>
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
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Easy Management
              </h3>
              <p className="text-gray-600">
                Seamlessly manage your rooms, bookings, and availability from
                one place.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Affordable Pricing
              </h3>
              <p className="text-gray-600">
                Enjoy competitive pricing that keeps your business growing.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Flexible Options
              </h3>
              <p className="text-gray-600">
                Customize your room offerings to meet your guests&apos; unique
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default My;
