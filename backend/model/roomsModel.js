const mongoose =require("mongoose");
const { schema } = require("./reviewModel");

const roomSchema = new mongoose.Schema ({
  title: String,
  location: String,
  rent: Number,

  nearby: String,        // near college, bus stand etc
  conditions: String,    // rules

  phone: String,         // owner contact

  reviews: [
    {
      userName: String,
      rating: Number,
      comment: String
    }
  ]
});

const roomModule = mongoose.model("Room", roomSchema);