"use client";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { destroySession } from "./actions/destroySession";

import React from "react";
import { useAuth } from "@/context/authContext";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Contact", href: "/contacts" },
  { label: "My Rooms", href: "/rooms/my" },
  { label: "Add Room", href: "/rooms/add" },
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
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-center gap-x-9 py-4 px-10 bg-white w-fit mx-auto mt-4 rounded-2xl items-center">
        {Links.slice(0, 4).map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              currentPath === link.href ? "text-blue-500" : "text-black"
            } hover:text-blue-500 transition duration-200`}
          >
            {link.label}
          </Link>
        ))}
        <Image src="/hotel_logo.svg" width={78} height={42} alt="Hotel Logo" />
        {Links.slice(4).map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              currentPath === link.href ? "text-blue-500" : "text-black"
            } hover:text-blue-500 transition duration-200`}
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
              } hover:text-blue-500 transition duration-200`}
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className={`${
                currentPath === "/sign-up" ? "text-blue-500" : "text-black"
              } hover:text-blue-500 transition duration-200`}
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
              className="text-black hover:text-blue-500 transition duration-200"
            >
              Log Out
            </button>
          </>
        )}
      </div>

      {/* Mobile Navbar */}
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex lg:hidden justify-between py-4 px-10 bg-white w-full items-center">
            <div className="flex items-center gap-x-4">
              <Button variant="ghost" aria-label="Open Menu">
                <MenuIcon />
              </Button>
              <Image
                src="/hotel_logo.svg"
                width={39}
                height={21}
                alt="Hotel Logo"
              />
            </div>
            <p>{currentUser?.name}</p>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-gray-100 flex flex-col h-full">
          <div className="flex flex-col space-y-4 mt-6">
            {Links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-blue-600 hover:text-white hover:bg-blue-600 py-2 px-4 rounded-lg transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto w-full flex flex-col gap-4 items-center border-t border-gray-300 pt-4">
            {!isAuthenticated ? (
              <div className="w-full flex flex-col items-center gap-4">
                <Link href="/sign-in">
                  <Button variant="solid" className="!w-full !py-2 !rounded-md">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="solid" className="!w-full !py-2 !rounded-md">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center gap-4">
                <p className="!w-full text-center text-lg font-medium">
                  {currentUser?.name}
                </p>
                <Button
                  variant="solid"
                  className="!w-full !py-2 !rounded-md"
                  color="red"
                  onClick={handleLogout}
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
