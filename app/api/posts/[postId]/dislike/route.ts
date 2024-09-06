import connectDB from "@/lib/db";
import { Post } from "@/models/post";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const { userId } = await req.json();
    if (typeof userId !== "string") {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }
    const post = await Post.findById({ _id: params.postId });
    if (!post) NextResponse.json({ message: "post not found!.." });
    await post?.updateOne({ $pull: { likes: userId } });
    return NextResponse.json({ message: "disliked" });
  } catch (error) {
    return NextResponse.json({ message: "post not found!.." });
  }
};
