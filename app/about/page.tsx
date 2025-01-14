import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const whyBookWithUsData = [
  {
    tag: "Affordable",
    tagColor: "blue",
    title: "Best Prices Guaranteed",
    description:
      "Enjoy unbeatable rates with exclusive deals tailored to your budget. No hidden costs, just great value.",
  },
  {
    tag: "Global Access",
    tagColor: "green",
    title: "Worldwide Coverage",
    description:
      "List your property and connect with millions of travelers seeking unique stays and experiences globally.",
  },
  {
    tag: "Secure Payments",
    tagColor: "crimson",
    title: "Peace of Mind Guaranteed",
    description:
      "Experience seamless and secure transactions, ensuring your payments and bookings are safe at every step.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 mt-20">
      <div className="max-w-6xl container mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">
              WHY CHOOSE US
            </h2>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
              Unlock Unforgettable Travel Experiences
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're planning your dream vacation or looking to attract
              global travelers to your property, we make it simple, secure, and
              affordable.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="relative lg:w-1/2">
            <Image
              alt="Traveler exploring the world"
              className="rounded-lg shadow-lg"
              src="/rooms/room-1.jpg"
              width={624}
              height={400}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {whyBookWithUsData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <Badge color={item.tagColor as "blue" | "green" | "red"}>
                {item.tag}
              </Badge>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-blue-100 p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Join thousands of satisfied travelers and hosts worldwide. Discover,
            book, and enjoy like never before.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
