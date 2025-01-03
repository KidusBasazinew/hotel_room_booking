"use client";
import createRoom from "@/app/actions/createRoom";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const AddRome = () => {
  const [state, formAction] = useFormState(createRoom, {});

  const router = useRouter();

  useEffect(() => {
    if (state.error) console.log(state.error);
    if (state.success) {
      console.log("Room created successfully!");
      router.push("/");
    }
  }, [state, router]);

  return (
    <section className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <section className="mb-8 text-center">
        <h1 className="mt-32 text-3xl font-extrabold tracking-tight text-gray-900">
          Add Room
        </h1>
        <p className="text-gray-600 mt-2">
          Fill out the form below to add a new room to your system.
        </p>
      </section>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl mx-auto">
        <form
          action={formAction}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Room Name */}
          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Room Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border  border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter room name (e.g., Large Conference Room)"
              required
            />
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border border-gray-300 rounded-lg w-full h-28 py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a detailed description of the room"
              required
            ></textarea>
          </div>

          {/* Square Feet */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Square Feet
            </label>
            <input
              type="number"
              id="sqft"
              name="sqft"
              className="border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter size in ft²"
              required
            />
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              className="border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Number of people"
              required
            />
          </div>

          {/* Price Per Hour */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Price Per Hour
            </label>
            <input
              type="number"
              id="price_per_hour"
              name="price_per_hour"
              className="border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full address"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Building, Floor, Room"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g., Mon-Fri, 9am-5pm"
              required
            />
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              className="border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g., projector, whiteboard"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 text-center">
            <Button size="4" type="submit" className="!w-full">
              Save Room
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddRome;
