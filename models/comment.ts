import mongoose, { Document, Model } from "mongoose";
import { user_I } from "./user";

export interface comment_I {
  textMessage: string;
  user: user_I;
}

export interface commentDocument_I extends comment_I, Document {
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new mongoose.Schema<commentDocument_I>(
  {
    textMessage: {
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
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

export const Comment: Model<commentDocument_I> =
  mongoose.models?.Comment ||
  mongoose.model<commentDocument_I>("Comment", commentSchema);
