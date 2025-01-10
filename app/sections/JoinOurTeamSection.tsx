import { Button } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const JoinOurTeamSection = () => {
  return (
    <div className="bg-white max-w-4xl mt-20 mx-auto flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Join our newsletter{" "}
            <span aria-label="party popper" role="img">
              🎉
            </span>
          </h1>
          <p className="text-gray-600 mb-6">
            Read and share new perspectives on just about any topic.
            Everyone&apos;s welcome.
          </p>
          <ul className="mb-6">
            <li className="flex items-center justify-center lg:justify-start mb-4">
              <span className="bg-blue-100 text-blue-600 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                01
              </span>
              <span className="text-gray-800">Get more discount</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start mb-4 ml-10 lg:ml-0">
              <span className="bg-red-100 text-red-600 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                02
              </span>
              <span className="text-gray-800">Get premium magazines</span>
            </li>
          </ul>
          <div className="flex items-center justify-center lg:justify-start space-x-2">
            <input
              className="border border-gray-300 rounded-full py-2 px-4 w-full max-w-sm"
              placeholder="Enter your email"
              type="email"
            />
            <Button size="3" className="!rounded-full">
              Subscribe
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            alt="Illustration of people reading books on a stack of large books with a coffee cup and plant"
            className="w-full max-w-md h-auto"
            src="/hotel_team.png"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeamSection;
