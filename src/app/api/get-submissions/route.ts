import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get the collection
    const collection = await getCollection("Leavelets");

    // Fetch documents from the collection
    const submissions = await collection.find({}).toArray();

    // Convert MongoDB specific types to JSON-friendly formats
    const formattedSubmissions = submissions.map((doc) => ({
      ...doc,
      _id: doc._id.toString(), // Convert ObjectId to string
      // Convert any other MongoDB specific types here
      createdAt: doc.createdAt?.toISOString() ?? null,
      updatedAt: doc.updatedAt?.toISOString() ?? null,
    }));

    return NextResponse.json(formattedSubmissions);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      {
        error: "Database operation failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
