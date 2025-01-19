"use server";
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllRooms({ filters = {}, page = 1, pageSize = 10 }) {
  try {
    const { databases } = await createAdminClient();

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS;

    if (!databaseId || !collectionId) {
      throw new Error(
        "Appwrite database or collection environment variables are missing."
      );
    }

    const query: string[] = [];

    // Add filtering based on the provided filters object
    Object.entries(filters).forEach(([key, value]) => {
      query.push(`${key}=${value}`);
    });

    // Calculate the offset and limit for pagination
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    // Add limit and offset to the query array
    query.push(`limit=${limit}`);
    query.push(`offset=${offset}`);
    // Fetch the rooms documents from the database with the filtering and pagination
    const { documents: rooms } = await databases.listDocuments(
      databaseId,
      collectionId,
      query
    );

    revalidatePath("/", "layout");

    return rooms;
  } catch (error) {
    console.log("Failed to get rooms", error);
    redirect("/error");
  }
}

export default getAllRooms;
