// app/api/submissions/route.ts
import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { value, type } = await request.json();

    if (!value?.trim()) {
      return NextResponse.json({ error: "value is required" }, { status: 400 });
    }

    const clientCollection = await getCollection("Leavelets");

    console.log("clentCollection", clientCollection);

    const result = await clientCollection.insertOne({
      value: value.trim(),
      type: type,
      createdAt: new Date(),
    });

    console.log("Inserted ID:", result.insertedId);

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    console.error("Database operation failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
