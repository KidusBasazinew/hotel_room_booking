import getMyBookings from "../actions/getMyBookings";
import Image from "next/image";
import CancelBookingButton from "../components/CancelBookingButton";
import NoThingIsHere from "../components/NoThingIsHere";

const page = async () => {
  const room = await getMyBookings();

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // Get month
    const options: Intl.DateTimeFormatOptions = { month: "short" };
    const month = date.toLocaleString("en-US", { ...options, timeZone: "UTC" });

    // Get day
    const day = date.getUTCDate();

    // Format time in UTC 12-hour
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };

    const time = date.toLocaleString("en-US", timeOptions);

    // Final formatted string
    return `${month} ${day} at ${time}`;
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5 p-5 mt-40">
      {room.length > 0 ? (
        room.map((booking) => {
          const { room_id: room } = booking;
          const imageUrl = room.image
            ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
            : "/images/no-image.jpg";
          return (
            <div
              key={booking.$id}
              className="flex items-center justify-between border border-gray-300 rounded-lg p-4 shadow-md"
            >
              {/* Left side: Room details */}
              <div className="flex items-center gap-4">
                <Image
                  src={imageUrl}
                  alt={room.name || "Room Image"}
                  className="w-36 h-24 rounded-lg object-cover"
                  width={36}
                  height={24}
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {room.name || "No Room Name Available"}
                  </h3>
                  {/* <p className="text-sm text-gray-600">
                    {room.description || "No Description Available"}
                  </p> */}
                  <p className="text-sm text-gray-500 mt-1">
                    Capacity: {room.capacity || "N/A"} people | Price: $
                    {room.price_per_hour || "N/A"} per hour
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Check-in: {formatDate(booking.check_in)} | Check-out:{" "}
                    {formatDate(booking.check_out)}
                  </p>
                </div>
              </div>

              {/* Right side: Cancel button */}
              <div>
                <CancelBookingButton bookingId={booking.$id} />
              </div>
            </div>
          );
        })
      ) : (
        <NoThingIsHere label={" No bookings found."}></NoThingIsHere>
      )}
    </div>
  );
};

export default page;
