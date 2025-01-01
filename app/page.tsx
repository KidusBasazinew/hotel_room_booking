"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Button, DropdownMenu, Heading } from "@radix-ui/themes";

import {
  DoubleArrowDownIcon,
  EyeClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import ServicesGridCard from "./components/ServicesGridCard";
import Link from "next/link";

import Date_Picker from "./components/Date_Picker";
import { useState } from "react";

import rooms from "../data/rooms.json";
import { Room } from "@/Types/Room";
import RoomCard from "./components/RoomCard";

const images = [
  "/banner/image_01.jpg",
  "/banner/image_02.jpg",
  "/banner/image_03.jpg",
];

const ServicesList = [
  { label: "Rooms", imageSrc: "/dining.jpg" },
  { label: "Dining", imageSrc: "/dining.jpg" },
  { label: "Service & Facilities", imageSrc: "/dining.jpg" },
  { label: "Conferences & Meetings", imageSrc: "/dining.jpg" },
  { label: "Wedding Package", imageSrc: "/dining.jpg" },
];

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [personType, setPersonType] = useState("");
  const [childAmount, setChildAmount] = useState("");

  return (
    <section>
      <div className="w-full h-screen relative top-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                width={1000}
                height={700}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full absolute top-[50%] md:bottom-20 flex flex-col md:flex-row  gap-y-4 justify-center items-center md:justify-start md:gap-x-28 md:items-end">
          <h1 className="text-center text-4xl md:text-6xl md:text-start font-bold leading-normal text-white z-20 md:ml-20 text-shadow-lg">
            Discover Extraordinary <br />
            Comfort in Hotels
          </h1>
          <Link href="#services" className="!z-20">
            <Button
              size="4"
              //need to be fixed
              className="bloack md:hidden hover:scale-110transition-transform"
            >
              View More <DoubleArrowDownIcon />
            </Button>
          </Link>
        </div>
      </div>

      <section className="bg-[#E9F3F6] max-w-5xl py-10 rounded-xl mx-auto mt-14 mb-14">
        <div className="py-3 mb-10">
          <Heading size="8" className="mx-6 text-center">
            Book a Room
          </Heading>
          <p className="py-3 text-center">
            Discover the perfect space for you!
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(
              `Submiting ${personType} having ${childAmount} child on ${startDate}`
            );
          }}
          className="flex flex-col justify-center items-center sm:flex-row gap-y-3 gap-x-12"
        >
          <div>
            <h2>Date</h2>
            <Date_Picker date={startDate} setStartDate={setStartDate} />
          </div>
          <div>
            <h2>Persons Info</h2>
            <div className="flex gap-x-2  gap-y-4 flex-col sm:flex-row justify-center items-center mt-2">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button
                    variant="solid"
                    size="4"
                    className="!bg-white !w-56 !text-gray-700 !shadow-sm !shadow-slate-400 !font-normal"
                  >
                    <PersonIcon fontSize={4} />
                    Persons
                    <DropdownMenu.TriggerIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={() => setPersonType("female")}>
                    Female
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item onClick={() => setPersonType("male")}>
                    Male
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button
                    variant="soft"
                    size="4"
                    className="!bg-white !w-56 !text-gray-700 !shadow-sm !shadow-slate-400 !font-normal"
                  >
                    <EyeClosedIcon />
                    Children
                    <DropdownMenu.TriggerIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={() => setChildAmount("1-2")}>
                    1-2
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item onClick={() => setChildAmount("more")}>
                    More than 2
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>
          <div>
            <Button size="4" mt="6" type="submit">
              Book Now
            </Button>
          </div>
        </form>
      </section>
      <section id="services" className="bg-[#F3F3F3]">
        <div className="max-w-5xl mx-auto py-10">
          <Heading size="8" className="mx-6 text-center md:text-start mb-10">
            Our Services
          </Heading>
          <div className="grid grid-cols-1 mx-6 md:mx-6 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServicesList.map((list, index) =>
              index === 0 ? (
                <ServicesGridCard
                  key={list.label}
                  label={list.label}
                  imageSrc={list.imageSrc}
                  rowSpan="row-span-2"
                />
              ) : (
                <ServicesGridCard
                  key={list.label}
                  label={list.label}
                  imageSrc={list.imageSrc}
                />
              )
            )}
          </div>
        </div>
      </section>
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
          {rooms.slice(0, 3).map((room: Room) => (
            <div
              key={room.$id}
              className="flex flex-col gap-y-2 p-6 bg-white rounded-2xl shadow-xl shadow-gray-400 w-full max-w-sm hover:scale-105 transition-transform"
            >
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
              <p className="text-sm font-light truncate">{room.description}</p>
              <h2 className="text-3xl text-center mt-6 font-bold">
                ${room.price_per_hour}
                <span className="text-xs font-light">/night</span>
              </h2>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
