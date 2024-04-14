const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    nameuser:String,
    comment: String,
    rating: Number,
    reviewtitle: String,
    reviewbody: String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;