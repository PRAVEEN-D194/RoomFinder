const reviewModel = require('../models/reviewModel');

//get single review api/v1/review/:id
const getSingleReview = async (req, res, next) => {
    try{
    const review = await reviewModel.find({_id:{$eq: req.params.id}});
    res.json({
        review:review,
    });
}catch(error){
    res.status(404).json({
    success: false,
    message: error.message});
}
}


//post review api/v1/review
const postReview = async (req, res, next) => {
    try {
    const review = req.body;
        const createdReview = await reviewModel.create(review);
        res.json({
            success: true,
            review: createdReview,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
module.exports = {
    getSingleReview: getSingleReview,
    postReview: postReview,
}