"use client";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Contact", href: "/contacts" },
];

const Navbar = () => {
  const currentRouter = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-50
    text-white drop-shadow-xl"
    >
      <Flex
        justify="center"
        gapX="9"
        className="py-4 bg-white max-w-2xl mx-auto mt-4 rounded-2xl items-center"
      >
        {Links.slice(0, 2).map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              currentRouter === link.href ? "text-blue-500" : "text-black"
            } hover:text-blue-500`}
          >
            {link.label}
          </Link>
        ))}
        <Image src="/hotel_logo.svg" width={78} height={42} alt="" />
        {Links.slice(2).map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              currentRouter === link.href ? "text-blue-500" : "text-black"
            } hover:text-blue-500`}
          >
            {link.label}
          </Link>
        ))}
      </Flex>
    </nav>
  );
};

export default Navbar;
