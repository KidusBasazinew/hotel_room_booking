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

    const queries: string[] = [];

    // Manually build queries for filtering
    Object.entries(filters).forEach(([key, value]) => {
      queries.push(`filter[${key}]=${value}`);
    });

    // Add pagination parameters to queries
    queries.push(`limit=${pageSize}`);
    queries.push(`offset=${(page - 1) * pageSize}`);

    // Fetch documents from the database
    const { documents: rooms } = await databases.listDocuments(
      databaseId,
      collectionId,
      queries
    );

    // Revalidate cache
    revalidatePath("/", "layout");

    return rooms;
  } catch (error) {
    console.error("Failed to get rooms:", error);
    redirect("/error");
  }
}

export default getAllRooms;
