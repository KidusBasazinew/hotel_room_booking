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
      <section id="services" className="max-w-5xl mx-auto py-10">
        <Heading size="8" className="mx-6 text-center md:text-start py-7">
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
      </section>
      <section className="bg-[#E9F3F6] max-w-5xl py-10 rounded-xl mx-auto">
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
    </section>
  );
}
