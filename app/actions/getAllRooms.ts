"use server";
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllRooms() {
  try {
    const { databases } = await createAdminClient();

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS;

    if (!databaseId || !collectionId) {
      throw new Error(
        "Appwrite database or collection environment variables are missing."
      );
    }

    const { documents: rooms } = await databases.listDocuments(
      databaseId,
      collectionId
    );

    revalidatePath("/", "layout");

    return rooms;
  } catch (error) {
    console.log("Failed to get rooms", error);
    redirect("/error");
  }
}
export default getAllRooms;
