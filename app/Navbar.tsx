"use client";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { destroySession } from "./actions/destroySession";

import React from "react";
import { useAuth } from "@/context/authContext";

const Links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Contact", href: "/contacts" },
];

const Navbar = () => {
  const currentPath = usePathname();

  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated, currentUser } = useAuth();

  const handleLogout = async () => {
    const result = await destroySession();

    if (result && result.success) {
      setIsAuthenticated(false);
      router.push("/sign-in");
    } else {
      console.log(result?.error);
    }
  };
  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-50
    text-white drop-shadow-xl"
    >
      <Flex
        justify="center"
        gapX="9"
        className="py-4 bg-white max-w-4xl mx-auto mt-4 rounded-2xl items-center"
      >
        {Links.slice(0, 3).map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              currentPath === link.href ? "text-blue-500" : "text-black"
            } hover:text-blue-500`}
          >
            {link.label}
          </Link>
        ))}
        <Image src="/hotel_logo.svg" width={78} height={42} alt="" />

        {Links.slice(3).map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              currentPath === link.href ? "text-blue-500" : "text-black"
            } hover:text-blue-500`}
          >
            {link.label}
          </Link>
        ))}

        {!isAuthenticated ? (
          <>
            <Link
              href="/sign-in"
              className={`${
                currentPath === "/sign-in" ? "text-blue-500" : "text-black"
              } hover:text-blue-500`}
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className={`${
                currentPath === "/sign-up" ? "text-blue-500" : "text-black"
              } hover:text-blue-500`}
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span className="text-black hover:text-blue-500">
              {currentUser?.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-black hover:text-blue-500"
            >
              Log Out
            </button>
          </>
        )}
      </Flex>
    </nav>
  );
};

export default Navbar;
