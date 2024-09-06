import mongoose, { Connection } from "mongoose";

let isConnected: boolean | Connection = false;
const connectDB = async () => {
  if (isConnected) {
    console.log("db already connected");
    return isConnected;
  }
  try {
    const res = await mongoose.connect(process.env.MONGO_URI!);
    isConnected = res.connection;
    console.log("db connected");
    return isConnected;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
