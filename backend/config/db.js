import mongoose from "mongoose";
import dotenv from "./config.env";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dotenv.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;