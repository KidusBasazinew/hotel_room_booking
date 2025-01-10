import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const whyBookWithUsData = [
  {
    tag: "Affordable",
    tagColor: "blue", // Matches allowed colors for the Badge
    title: "Cost-Effective Bookings",
    description:
      "Book your stay with no hidden fees, giving you the best rates and exclusive offers.",
  },
  {
    tag: "Global Reach",
    tagColor: "green", // Matches allowed colors for the Badge
    title: "Reach Travelers Worldwide",
    description:
      "Your hotel listing will be seen by millions of potential guests from every corner of the globe.",
  },
  {
    tag: "Safe & Secure",
    tagColor: "crimson", // Matches allowed colors for the Badge
    title: "Simple, Secure Payments",
    description:
      "With our secure payment system, managing your bookings and payments online has never been easier.",
  },
];

const WhyBookWithUsSection = () => {
  return (
    <div className="max-w-5xl container mx-auto px-4 py-8 flex flex-col gap-x-10 lg:flex-row items-center">
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
        <Image
          alt="A person with a suitcase viewing a world map with an airplane flying around and a red balloon"
          className="max-w-full h-auto"
          src="/why_work_with_us.jpg"
          width={624}
          height={400}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="absolute top-1/2 w-full mx-auto text-center text-6xl text-white text-shadow-md font-extrabold">
          Why Book with <br /> Us
        </h1>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">
          WHY BOOK WITH US
        </h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Discover Top Destinations
        </h1>
        {whyBookWithUsData.map((item, index) => (
          <div key={index} className="mb-6">
            <Badge color={item.tagColor as "blue" | "green" | "red"}>
              {item.tag}
            </Badge>
            <h3 className="text-xl text-foreground font-medium mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBookWithUsSection;
