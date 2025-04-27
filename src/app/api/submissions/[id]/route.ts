// src/app/api/submissions/[id]/route.ts
import { getCollection } from "@/lib/collections";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // Make params asynchronous
) {
  try {
    const { id } = await params; // Await params to extract the 'id'

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const collection = await getCollection("Leavelets");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      {
        error: "Delete operation failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET handler if you want to fetch single submission
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // Make params asynchronous
) {
  try {
    const { id } = await params; // Await params to extract the 'id'

    const collection = await getCollection("Leavelets");
    const submission = await collection.findOne({ _id: new ObjectId(id) });

    if (!submission) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    // Convert MongoDB document to JSON-friendly format
    const formattedSubmission = {
      ...submission,
      _id: submission._id.toString(),
      createdAt: submission.createdAt?.toISOString() ?? null,
      updatedAt: submission.updatedAt?.toISOString() ?? null,
    };

    return NextResponse.json(formattedSubmission);
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
