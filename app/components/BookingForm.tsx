"use client";
import { Room } from "@/Types/Room";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import bookRoom from "../actions/bookRoom";

interface Props {
  room: Room;
}

const initial = { error: "", status: "" };

const BookingForm = ({ room }: Props) => {
  const [state, formAction] = useFormState(bookRoom, initial);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (state.error) {
      setErrorMessage(state.error);
    }
    if (state.success) {
      setSuccessMessage("Room has been booked!");
      setTimeout(() => {
        router.push("/bookings");
      }, 2000); // Redirect after 2 seconds for a smooth transition
    }
  }, [state, router]);

  useEffect(() => {
    if (state.error) console.log(state.error);
    if (state.success) {
      console.log("Room has been booked!");
      router.push("/bookings");
    }
  }, [state, router]);

  return (
    <div className="mt-6 mx-4">
      <h2 className="text-xl font-bold">Book this Room</h2>
      <form action={formAction} className="mt-4">
        <input type="hidden" name="room_id" value={room.$id} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="check_in_date"
              className="block text-sm font-medium text-gray-700"
            >
              Check-In Date
            </label>
            <input
              type="date"
              id="check_in_date"
              name="check_in_date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="check_in_time"
              className="block text-sm font-medium text-gray-700"
            >
              Check-In Time
            </label>
            <input
              type="time"
              id="check_in_time"
              name="check_in_time"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="check_out_date"
              className="block text-sm font-medium text-gray-700"
            >
              Check-Out Date
            </label>
            <input
              type="date"
              id="check_out_date"
              name="check_out_date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="check_out_time"
              className="block text-sm font-medium text-gray-700"
            >
              Check-Out Time
            </label>
            <input
              type="time"
              id="check_out_time"
              name="check_out_time"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <p className="text-red-500 mt-2">{errorMessage}</p>
        <p className="text-green-500">{successMessage}</p>
        <div className="mt-6">
          <Button type="submit" size="4" className="!w-full">
            Book Room
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
