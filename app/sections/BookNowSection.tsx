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
    <section className="bg-[#E9F3F6] max-w-5xl py-10 rounded-xl mx-auto mt-14 mb-14">
      <div className="py-3 mb-10">
        <Heading size="8" className="mx-6 text-center">
          Book a Room
        </Heading>
        <p className="py-3 text-center">Discover the perfect space for you!</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            `Submiting ${personType} having ${childAmount} child on ${startDate}`
          );
        }}
        className="flex flex-col justify-center items-center sm:flex-row gap-y-3 gap-x-12"
      >
        <div>
          <h2>Date</h2>
          <Date_Picker date={startDate} setStartDate={setStartDate} />
        </div>
        <div>
          <h2>Persons Info</h2>
          <div className="flex gap-x-2  gap-y-4 flex-col sm:flex-row justify-center items-center mt-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  variant="solid"
                  size="4"
                  className="!bg-white !w-56 !text-gray-700 !shadow-sm !shadow-slate-400 !font-normal"
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
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  variant="soft"
                  size="4"
                  className="!bg-white !w-56 !text-gray-700 !shadow-sm !shadow-slate-400 !font-normal"
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
        <div>
          <Button size="4" mt="6" type="submit">
            Book Now
          </Button>
        </div>
      </form>
    </section>
  );
};

export default BookNowSection;
