const reviewModel = require('../models/reviewModel');

//get single review api/v1/rooms/:id/review
// const getSingleReview = async (req, res, next) => {
//     console.log(req.params.id);
//     try{
//     const review = await reviewModel.find({ room: mongoose.Types.ObjectId(req.params.id) });
//     res.json({
//         review:review,
//     });
// }catch(error){
//     res.status(404).json({
//     success: false,
//     message: error.message});
// }
// }

const getSingleReview = async (req, res) => {
  try {
    const roomId = req.params.id;

    const reviews = await reviewModel.find({ room: roomId });
    console.log(reviews);

    res.status(200).json({
      success: true,
      count: reviews.length,
      reviews
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};




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