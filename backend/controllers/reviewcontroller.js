const Product = require("../models/productmodel");
const Review = require("../models/reviewmodel");
const WrapAsync = require("../utils/WrapAsync");

const reviewcontroller = {
    createreview: WrapAsync(async (req, res) => {
        const products = await Product.findById(req.params.id);
        console.log(products)
        if (!products) {
            return res.status(404).json({
                message: "Product not found."
            });
        }
        const {comment, rating, reviewbody,reviewtitle } = req.body;
 const authorId=req.user._id
//  const authorname=req.user.username
        if (!(comment || rating || reviewbody || reviewtitle)) {
            return res.status(400).json({
                message: "All fields are required for creating a review."
            });
        }
        try {
            const newReview = await Review({
                comment,
                rating,
                reviewtitle,
                reviewbody,
                author: authorId// Assuming req.user is available after authentication
            });

            products.reviews.push(newReview)
            await newReview.save()
            const newproduct=await products.save();
            console.log(newproduct)

            res.status(200).json({
                review: newReview,
                message: "Review created successfully."
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error,
                message: "Failed to create review."
            });
        }
    }),
    getReviewsForProduct: WrapAsync(async (req, res) => {
        const { id } = req.params; // Assuming the product ID is passed in the URL
        console.log(id);

        try {
            // Fetch reviews associated with the product
            const reviews = await Review.find(id ).populate('author');
            if (!reviews || reviews.length === 0) {
                return res.status(404).json({
                    message: "No reviews found for the specified product."
                });
            }

            // Map the reviews to include only necessary fields for the frontend
            const formattedReviews = reviews.map(review => {
                if (!review || !review._id) {
                    return null; // Skip null or undefined reviews
                }
                return {
                    _id: review._id,
                    comment: review.comment,
                    rating: review.rating,
                    revietitle: review.revietitle,
                    reviewbody: review.reviewbody,
                    author: {
                        _id: review.author ? review.author._id : null, // Check if author object exists
                        username: review.author ? review.author.username : null,
                        email: review.author ? review.author.email : null,
                        image: review.author ? review.author.image : null
                    }
                };
            }).filter(review => review !== null); // Remove null reviews from the array

            if (formattedReviews.length === 0) {
                return res.status(404).json({
                    message: "No valid reviews found for the specified product."
                });
            }

            res.status(200).json({
                reviews: formattedReviews,
                message: "Reviews retrieved successfully."
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error,
                message: "Failed to retrieve reviews."
            });
        }
    }),

    updatereview: WrapAsync(async (req, res) => {
        const { id, reviewid } = req.params;
        const updatedData = req.body;

        try {
            const product = await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
            if (!product) {
                return res.status(404).json({
                    message: "Product not found."
                });
            }

            const updatedReview = await Review.findByIdAndUpdate(reviewid, updatedData, { new: true });

            res.status(200).json({
                updatedReview,
                message: "Review updated successfully."
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error,
                message: "Failed to update review."
            });
        }
    }),

    deletereview: WrapAsync(async (req, res) => {
        const { id, reviewid } = req.params;

        try {
            await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
            const deletedReview = await Review.findByIdAndDelete(reviewid);

            res.status(200).json({
                deletedReview,
                message: "Review deleted successfully."
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error,
                message: "Failed to delete review."
            });
        }
    })
};

module.exports = reviewcontroller;
