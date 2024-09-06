import mongoose, { Document, Model } from "mongoose";
import { user_I } from "./user";
import { comment_I } from "./comment";

export interface post_I {
  description?: string;
  imageUrl?: string;
  user: user_I;
  likes?: string[];
  comments: comment_I[];
}

export interface postDocument_I extends post_I, Document {
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema<postDocument_I>(
  {
    description: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    user: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      userID: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
    likes: [String],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export const Post: Model<postDocument_I> =
  mongoose.models?.Post || mongoose.model<postDocument_I>("Post", postSchema);
