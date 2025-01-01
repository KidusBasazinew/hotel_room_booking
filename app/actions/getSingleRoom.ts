"use server";

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getSingleRoom(id: string) {
  try {
    const { databases } = await createAdminClient();

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS;

    if (!databaseId || !collectionId) {
      throw new Error(
        "Appwrite database or collection environment variables are missing."
      );
    }

    // Fetch rooms
    const room = await databases.getDocument(databaseId, collectionId, id);

    // Revalidate the cache for this path
    revalidatePath("/", "layout");

    return room;
  } catch (error) {
    console.log("Failed to get room", error);
    redirect("/error");
  }
}

export default getSingleRoom;
