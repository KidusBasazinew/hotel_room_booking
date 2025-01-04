import React from "react";
import Image from "next/image";
import getSingleRoom from "@/app/actions/getSingleRoom";
import { CiLocationOn, CiMoneyBill } from "react-icons/ci";
import { IoCalendarNumberOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import BookingForm from "@/app/components/BookingForm";
import { Room } from "@/Types/Room";
import Link from "next/link";
import DeleteRoomButton from "@/app/components/DeleteRoomButton";
import getMyRooms from "@/app/actions/getMyRooms";
import { Button } from "@radix-ui/themes";
import { Check } from "lucide-react";

const page = async ({ params }: { params: { id: string } }) => {
  const room = (await getSingleRoom(params.id)) as Room;

  const rooms = await getMyRooms();

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
  const imageUrl = room.image
    ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
    : "/images/no-image.jpg";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
      {/* Image Section with 2/3 of the height */}
      <div className="col-span-1 md:col-span-2 w-full h-[calc(100vh*2/3)] overflow-hidden">
        <Image
          src={imageUrl}
          width={1200}
          height={780}
          className="object-cover w-full h-full"
          alt={room.name}
        />
      </div>
      <Link href="/" className="col-span-1 md:col-span-2 w-full">
        <FaChevronLeft className="inline mr-1" />
        <span className="ml-2">Back to Rooms</span>
      </Link>

      {/* Room Details Section */}
      <div className="p-4">
        <h2 className="text-4xl py-2">{room.name}</h2>
        <p className="py-4">{room.description}</p>
        <div className="grid grid-cols-2 gap-y-4 p-4">
          <div>
            <div className="flex items-center justify-start gap-x-2">
              <IoCalendarNumberOutline />
              <p>Date</p>
            </div>
            <p>{room.availability}</p>
          </div>
          <div>
            <div className="flex items-center justify-start gap-x-2">
              <CiLocationOn />
              <p>Location</p>
            </div>
            <p>{room.availability}</p>
          </div>
          <div>
            <div className="flex items-center justify-start gap-x-2">
              <CiMoneyBill />
              <p>Price</p>
            </div>
            <p>{room.price_per_hour}</p>
          </div>
          <div>
            <div className="flex items-center justify-start gap-x-2">
              <MdOutlineEventAvailable />
              <p>Availability</p>
            </div>
            <p>{room.availability}</p>
          </div>
        </div>
        <div className="bg-[#E9F3F6] rounded-md p-4">
          <h3 className="text-blue-950 font-bold ">Room Information</h3>

          {room.amenities
            .split(", ")
            .map((item: string) => item.trim())
            .map((amenitile: string) => (
              <div key={amenitile} className="flex items-center gap-x-2 ml-4">
                <Check />
                <li className="text-blue-900 list-none ">{amenitile}</li>
              </div>
            ))}
        </div>
      </div>

      <div className="space-y-2 p-4">
        <Image
          src={imageUrl}
          width={1080}
          height={700}
          alt=""
          className="rounded-xl"
        />
        <div className="py-8">
          <div className="flex justify-between gap-x-2  items-center">
            <h2>{room.name}</h2>
            <p className="text-blue-700 font-semibold">
              ${room.price_per_hour}
            </p>
          </div>
          <div className="flex items-center justify-start gap-x-2 m-2">
            <CiLocationOn />
            <p>{room.address}</p>
          </div>
          <div className="flex items-center justify-start gap-x-2 m-2">
            <IoPersonOutline />
            <p>{room.capacity}/100 capacity</p>
          </div>
          <p className="truncate">{room.description}</p>
        </div>
        {rooms.find((rom) => rom.$id === room.$id) ? (
          <DeleteRoomButton roomId={room.$id} />
        ) : (
          <Button size="3" className="!w-full">
            View Room
          </Button>
        )}
      </div>
      <section id="book" className="col-span-1 md:col-span-2 w-full">
        <BookingForm room={room} />
      </section>
    </div>
  );
};

export default page;
