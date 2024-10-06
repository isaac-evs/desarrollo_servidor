/* Import moongose library and dotenv module */
import mongoose from "mongoose";
import dotenv from "dotenv";

/* Load the environment variables */
dotenv.config();

/* Connect to the database */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
