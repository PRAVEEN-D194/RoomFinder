import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  rent: Number,
  conditions: String,
  positives: [String],
  negatives: [String],
  images: [String],
  owner: String,
}, { timestamps: true });

export default mongoose.model("Room", roomSchema);