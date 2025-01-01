import React from "react";
import Image from "next/image";
import { Button } from "@radix-ui/themes";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Newsletter Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-semibold mb-4">
              Newsletter & Special Promo
            </h3>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email here"
                className="max-w-xl md:w-auto p-3 rounded-lg border border-gray-300 focus:outline-none text-black"
              />
              <Button type="submit" size="4">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Logo and Links Section */}
          <div className="flex flex-col items-center md:items-end">
            {/* Logo */}
            <div className="mx-auto">
              <Image src="/hotel_logo.svg" width={100} height={100} alt="" />
            </div>

            {/* Links */}
            <ul className="flex justify-center gap-x-10 mt-6">
              <div className="space-y-3">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Location
                  </a>
                </li>
              </div>
              <div className="space-y-3">
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Term of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </div>
              <div className="space-y-3">
                <li>
                  <a href="#" className="hover:underline">
                    Services & Facilities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How to book
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
          © Copyright Booking Hotels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
