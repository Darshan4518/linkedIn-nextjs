"use server";

import { Post } from "@/models/post";
import { user_I } from "@/models/user";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db";
import { revalidatePath } from "next/cache";
import { Comment } from "@/models/comment";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECETE,
});

// create post using server

export const createPostActions = async (
  inputText: string,
  selectedImage: string
) => {
  await connectDB();
  const user = await currentUser();
  if (!user) throw new Error("user not athonticated");
  const image = selectedImage;
  const userDb: user_I = {
    firstName: user?.firstName || "darshan",
    lastName: user?.lastName || "MERN Stock",
    userID: user?.id,
    profilePhoto: user?.imageUrl,
    username: user?.username || "username",
  };

  let cloudeResponse;
  try {
    if (image) {
      cloudeResponse = await cloudinary.uploader.upload(image);
      await Post.create({
        description: inputText,
        user: userDb,
        imageUrl: cloudeResponse.secure_url,
      });
    } else {
      await Post.create({
        description: inputText,
        user: userDb,
      });
    }
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

// getting all post from sever

export const getAllPosts = async () => {
  await connectDB();
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({ path: "comments", options: { sort: { createdAt: -1 } } });
    if (!posts) return [];
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    console.log(error);
  }
};

// delete post from db

export const deletePost = async (postId: string) => {
  await connectDB();

  const user: any = await currentUser();

  const post = await Post.findById(postId);

  if (!user) throw new Error("user not authenticated");

  try {
    if (post?.user?.userID === user?.id) {
      await Post.findByIdAndDelete(postId);
      revalidatePath("/");
    }
  } catch (error) {
    throw new Error("post not deleted from some accurs");
  }
};

// create comment

export const createCommentAction = async (
  postId: string,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("user not authenticated");
    const post = await Post.findById(postId);
    if (!post) throw new Error("post not found");

    const inputText = formData.get("inputText") as string;
    const userDb: user_I = {
      firstName: user?.firstName || "darshan",
      lastName: user?.lastName || "MERN Stock",
      userID: user?.id,
      profilePhoto: user?.imageUrl,
      username: user?.username || "username",
    };
    const commnet: any = await Comment.create({
      textMessage: inputText,
      user: userDb,
    });
    post?.comments?.push(commnet._id);
    await post.save();
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};
