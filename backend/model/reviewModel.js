const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: String,
    location: String,
    rent: Number,

    description: String,

    positives: [String],   // good things
    negatives: [String],   // bad things

    images: [String],      // image URLs

    reviews: [
        {
        userName: String,
        rating: Number,
        comment: String
        }
    ]
    });

const reviewModel = mongoose.model('Review', reviewSchema);
module.exports = reviewModel;