import { NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";
import { links } from "@/lib/data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const link = links.find((l) => l.id === id);

  if (!link) {
    return NextResponse.json({ error: "Link not found" }, { status: 404 });
  }

  try {
    const client = await getMongoClientPromise();
    const db = client.db();
    await db
      .collection("linkClicks")
      .updateOne(
        { linkId: id },
        { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
        { upsert: true }
      );
  } catch (error) {
    // 클릭 집계 실패가 사용자의 이동을 막아서는 안 되므로 로그만 남긴다.
    console.error("Failed to record link click:", error);
  }

  return NextResponse.redirect(link.url, { status: 302 });
}
