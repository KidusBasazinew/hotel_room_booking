import { Button } from "@radix-ui/themes";
import React from "react";
import getAllRooms from "../actions/getAllRooms";

import Link from "next/link";
import RoomCard from "../components/RoomCard";

const RoomsSection = async () => {
  const rooms = await getAllRooms();

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  return (
    <section className="max-w-5xl mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row items-start justify-between md:items-center py-10 gap-y-4">
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
          rooms.slice(0, 3).map((room, index) => {
            const imageUrl = room.image
              ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
              : "/images/no-image.jpg";
            if (!room) return null;
            // console.log(room);
            return (
              <Link key={room.$id} href={`/rooms/${room.$id}`}>
                <RoomCard
                  key={index}
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
