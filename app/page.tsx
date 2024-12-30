"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const images = [
  "/banner/image_01.jpg",
  "/banner/image_02.jpg",
  "/banner/image_03.jpg",
];

export default function Home() {
  return (
    <>
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
        <div className="w-full absolute bottom-20 flex justify-start items-center">
          <h1 className="text-6xl font-bold leading-normal text-white z-20 ml-20 text-shadow-lg">
            Discover Extraordinary <br />
            Comfort in Hotels
          </h1>
        </div>
      </div>
    </>
  );
}
