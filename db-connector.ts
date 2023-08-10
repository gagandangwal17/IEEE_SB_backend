import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connect = async() => {
    try {
      mongoose.connect(process.env.MONGO_URI!);
      console.log("MongoDB connected");
    } catch (err: any) {
      console.log("Error connecting to db")
      process.exit(1);
    }
  }