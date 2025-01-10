"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ThankYou = () => {
  const searchParams = useSearchParams();

  // Get query parameters
  const roomName = searchParams.get("roomName");
  // const description = searchParams.get("description");
  const sqft = searchParams.get("sqft");
  const capacity = searchParams.get("capacity");
  const pricePerHour = searchParams.get("pricePerHour");
  const address = searchParams.get("address");
  const location = searchParams.get("location");
  const availability = searchParams.get("availability");
  const amenities = searchParams.get("amenities");
  const imageID = searchParams.get("imageId");
  console.log(imageID);

  const [imageURL, setImageURL] = useState<string | null>(null);
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BOOKING;

  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  useEffect(() => {
    if (!imageID) {
      console.log("ImageId not found");
      return;
    }

    // Construct the image URL using the Appwrite endpoint
    const appwriteEndpoint = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files`; // Fixed URL format
    const url = `${appwriteEndpoint}/${imageID}/view?project=${projectId}`; // Correctly build the URL
    console.log(url);
    setImageURL(url);
  }, [imageID, bucketId, projectId]);

  useEffect(() => {
    if (!roomName) {
      console.error("Missing room data");
    }
  }, [roomName]);

  return (
    <main className="relative lg:min-h-full">
      <div className="hidden lg:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          fill
          src="/checkout-thank-you_02.png"
          className="h-full w-full object-cover object-center"
          alt="thank you for your order"
        />
      </div>

      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
          <div className="lg:col-start-2">
            <p className="text-sm font-medium text-blue-600">
              Room created successfully
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Thanks for creating the room
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Your room has been successfully created, and we&apos;re now
              processing the details. Hang tight, and we&apos;ll confirm
              everything soon!
            </p>

            <div className="mt-16 text-sm font-medium">
              <div className="text-muted-foreground">Size</div>
              <div className="mt-2 text-gray-900">{sqft} ft²</div>

              <ul className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-muted-foreground">
                <li className="flex space-x-6 py-6">
                  <div className="relative h-24 w-24">
                    {imageURL && (
                      <Image
                        fill
                        src={imageURL}
                        alt="product image"
                        className="flex-none rounded-md bg-gray-100 object-cover object-center"
                      />
                    )}
                  </div>

                  <div className="flex-auto flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-gray-900">{roomName}</h3>
                      <p className="my-1">{amenities}</p>
                    </div>
                    <a
                      href={`/rooms/`}
                      download="Product Name"
                      className="text-blue-600 hover:underline underline-offset-2"
                    >
                      Go to this room
                    </a>
                  </div>

                  <p className="flex-none font-medium text-muted-foreground">
                    Capacity: <span className="text-gray-900">{capacity}</span>
                  </p>
                </li>
              </ul>

              <div className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-muted-foreground">
                <div className="flex justify-between">
                  <p>Location</p>
                  <p className="text-gray-900">{location}</p>
                </div>

                <div className="flex justify-between">
                  <p>Address</p>
                  <p className="text-gray-900">{address}</p>
                </div>
                <div className="flex justify-between">
                  <p>Availability</p>
                  <p className="text-gray-900">{availability}</p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                  <p className="text-base">Price per hour</p>
                  <p className="text-base text-slate-900">${pricePerHour}</p>
                </div>
              </div>

              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <Link
                  href="/products"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Continue &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
