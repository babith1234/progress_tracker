import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
  try {
    const mongodbUri = process.env.MONGODB_URI;
    console.log(mongodbUri);

    if (!mongodbUri) {
      console.log("unknown mongodb uri");
    }

    await mongoose.connect(mongodbUri);

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
}
