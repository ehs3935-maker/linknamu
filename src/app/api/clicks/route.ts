import { NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";
import { links } from "@/lib/data";

export async function GET() {
  const counts: Record<string, number> = Object.fromEntries(
    links.map((link) => [link.id, 0])
  );

  try {
    const client = await getMongoClientPromise();
    const db = client.db();
    const docs = await db
      .collection("linkClicks")
      .find({ linkId: { $in: links.map((l) => l.id) } })
      .toArray();

    for (const doc of docs) {
      counts[doc.linkId] = doc.count ?? 0;
    }
  } catch (error) {
    console.error("Failed to fetch link click counts:", error);
  }

  return NextResponse.json(counts);
}
