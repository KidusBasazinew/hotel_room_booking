import React from "react";

import Image from "next/image";
import { Button } from "@radix-ui/themes";
import { PersonIcon } from "@radix-ui/react-icons";
import getAllRooms from "../actions/getAllRooms";
import Link from "next/link";
import RoomCard from "../components/RoomCard";

const page = async () => {
  const rooms = await getAllRooms();

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  return (
    <>
      {/* Banner Section */}
      <div className="relative">
        <Image
          src="/banner/image_03.jpg"
          className="w-full h-96 object-cover"
          alt=""
          width={1200}
          height={200}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="flex flex-col items-center gap-y-4 absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-4xl md:text-5xl text-white text-center">
            Discover Your Perfect Stay with Us
          </h1>
          <Button size="4">Get Started</Button>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-gray-700 text-center leading-normal py-20">
          Experience the Pinnacle of{" "}
          <span className="text-sky-600">Luxury</span> and{" "}
          <span className="text-sky-600">Comfort</span>
          <br /> in Our Exquisite Rooms
        </h1>
      </div>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/icons/luxury.png"
              alt="Luxury"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Luxury</h3>
            <p className="text-gray-600">
              Enjoy top-tier amenities and unparalleled comfort.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/icons/location.png"
              alt="Prime Location"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Prime Location</h3>
            <p className="text-gray-600">
              Stay in the heart of the city or near breathtaking landscapes.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/icons/support.png"
              alt="24/7 Support"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is always available to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row items-start justify-between md:items-center py-10 gap-y-4">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl text-sky-600">Special Offers</h3>
            <h1 className="text-4xl font-semibold">Best Offer of the Month</h1>
            <p className="max-w-2xl font-light">
              Experience fantastic benefits and obtain better rates when you
              book directly through our official website.
            </p>
          </div>
          <Button size="4">View All</Button>
        </div>
      </section>

      {/* Our Rooms Section */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Rooms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {rooms && rooms.length > 0 ? (
            rooms.map((room) => {
              const imageUrl = room.image
                ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
                : "/images/no-image.jpg";

              return (
                <Link key={room.$id} href={`/rooms/${room.$id}`}>
                  <RoomCard
                    key={room.$id}
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
                  />
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
    </>
  );
};

export default page;
