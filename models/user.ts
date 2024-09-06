import mongoose, { Document, Model } from "mongoose";
export interface user_I {
  firstName: string;
  lastName: string;
  userID: string;
  profilePhoto?: string;
  username: string;
  bio?: string;
}
export interface userDocument_I extends user_I, Document {
  createdAt: Date;
  updatedAt: Date;
}
const userSchema = new mongoose.Schema<userDocument_I>(
  {
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
    username: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const User: Model<userDocument_I> =
  mongoose.models?.User || mongoose.model<userDocument_I>("User", userSchema);
