import connectDB from "@/lib/db";
import { Post } from "@/models/post";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const post = await Post.findById(params.postId);
    if (!post) {
      return NextResponse.json({ message: "Post not found!" }, { status: 404 });
    }
    return NextResponse.json(post.likes);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};

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

    const post = await Post.findById(params.postId);
    if (!post) {
      return NextResponse.json({ message: "Post not found!" }, { status: 404 });
    }

    await post.updateOne({ $addToSet: { likes: userId } });
    return NextResponse.json({ message: "Liked" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
