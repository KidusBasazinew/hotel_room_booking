// components/BookedRoomCard.tsx
import { Booking } from "@/Types/Booking";
import React from "react";

interface BookedRoomCardProps {
  booking: Booking;
}

const BookedRoomCard: React.FC<BookedRoomCardProps> = ({ booking }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{booking.roomName}</h3>
      <p>Booking Date: {booking.bookingDate}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default BookedRoomCard;
