"use client";

import { PersonIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { Heading, DropdownMenu, Button } from "@radix-ui/themes";
import React, { useState } from "react";
import Date_Picker from "../components/Date_Picker";

const BookNowSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [personType, setPersonType] = useState("");
  const [childAmount, setChildAmount] = useState("");

  return (
    <section className="bg-[#E9F3F6] max-w-5xl py-12 px-6 rounded-xl mx-auto mt-14 mb-14 shadow-md">
      <div className="text-center mb-10">
        <Heading size="8">Book a Room</Heading>
        <p className="py-3 text-gray-600">
          Discover the perfect space for you!
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            `Submitting ${personType} having ${childAmount} child on ${startDate}`
          );
        }}
        className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center"
      >
        {/* Date Picker */}
        <div className="w-full sm:w-auto">
          <h2 className="text-lg font-medium mb-2">Date</h2>
          <Date_Picker date={startDate} setStartDate={setStartDate} />
        </div>

        {/* Persons Info */}
        <div className="w-full sm:w-auto">
          <h2 className="text-lg font-medium mb-2">Persons Info</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Persons Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  variant="solid"
                  size="4"
                  className="!bg-white !w-full sm:!w-56 !text-gray-700 !shadow-sm !shadow-slate-400 !font-normal"
                >
                  <PersonIcon fontSize={4} />
                  Persons
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item onClick={() => setPersonType("female")}>
                  Female
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onClick={() => setPersonType("male")}>
                  Male
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            {/* Children Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  variant="soft"
                  size="4"
                  className="!bg-white !w-full sm:!w-56 !text-gray-700 !shadow-sm !shadow-slate-400 !font-normal"
                >
                  <EyeClosedIcon />
                  Children
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item onClick={() => setChildAmount("1-2")}>
                  1-2
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onClick={() => setChildAmount("more")}>
                  More than 2
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full sm:w-auto">
          <Button
            size="4"
            className="!bg-sky-600 !text-white w-full sm:w-auto"
            type="submit"
          >
            Book Now
          </Button>
        </div>
      </form>
    </section>
  );
};

export default BookNowSection;
