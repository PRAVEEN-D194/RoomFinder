// const mongoose = require('mongoose');
// const Room = require('./roomsModel');
// const reviewSchema = new mongoose.Schema({
//     room: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Room',
//     },
//     roomid: String,
//     title: String,
//     location: String,
//     rent: Number,

//     description: String,

//     positives: [String],   // good things
//     negatives: [String],   // bad things

//     images: [String],      // image URLs

//     reviews: [
//         {
//         userName: String,
//         rating: Number,
//         comment: String
//         }
//     ]
//     });

// const reviewModel = mongoose.model('Review', reviewSchema);
// module.exports = reviewModel;

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },

  userName: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },

  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;