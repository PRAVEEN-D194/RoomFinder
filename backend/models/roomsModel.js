
const mongoose = require("mongoose");


const roomSchema = new mongoose.Schema({
  title: String,
  location: String,
  rent: Number,
  nearby: String,
  highlights : String,
  ownerName: String,
  description: String,
  advance: Number,
  conditions: String,
  positive: String,
  negative: String,
  image : String,
  phone: String,
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;