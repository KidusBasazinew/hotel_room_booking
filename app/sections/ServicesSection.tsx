import { Heading } from "@radix-ui/themes";
import React from "react";
import ServicesGridCard from "../components/ServicesGridCard";

const ServicesList = [
  { label: "Dining", imageSrc: "/dining.jpg" },
  { label: "Room", imageSrc: "/rooms/room-2.jpg" },
  { label: "Service & Facilities", imageSrc: "/rooms/service-facilitys.jpg" },
  { label: "Conferences & Meetings", imageSrc: "/rooms/room-3.jpg" },
  { label: "Wedding Package", imageSrc: "/rooms/wedding.jpg" },
];

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
