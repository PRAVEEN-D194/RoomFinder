// const mongoose =require("mongoose");
// const { schema } = require("./reviewModel");

// const roomSchema = new mongoose.Schema ({
//   Id: String,
//   title: String,
//   location: String,
//   rent: Number,

//   nearby: String,        // near college, bus stand etc
//   conditions: String,    // rules

//   phone: String,         // owner contact

//   reviews: [
//     {
//       userName: String,
//       rating: Number,
//       comment: String
//     }
//   ]
// });

// const roomModule = mongoose.model("Room", roomSchema);

// module.exports = roomModule;

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