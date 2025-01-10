import Image from "next/image";
import React from "react";
import authors from "../../Data/authers.json";

const TopAuthorsSection = () => {
  return (
    <div className="bg-[#FFF7E9] min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Top 10 author of the month</h1>
        <p className="text-gray-600">Rating based on customer reviews</p>
      </div>

      {/* Author Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <span className="absolute bg-red-100 text-red-600 font-bold rounded-full px-3 py-1 text-sm -top-3">
              {author.rank}
            </span>
            <Image
              src={author.image}
              alt={author.name}
              className="w-24 h-24 rounded-full mb-4"
              width={100}
              height={100}
            />
            <h2 className="text-lg font-semibold">{author.name}</h2>
            <p className="text-gray-500">{author.location}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1 font-bold">{author.rating}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-12 space-x-4">
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full">
          Show me more
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
          Become a host
        </button>
      </div>
    </div>
  );
};

export default TopAuthorsSection;
