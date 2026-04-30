const getSingleReview = (req, res, next) => {
    res.json({
        success: true,
        message: "Single review fetched successfully",
    });
}

const postReview = (req, res, next) => {
    res.json({
        success: true,
        message: "Review posted successfully",
    });
}
module.exports = {
    getSingleReview: getSingleReview,
    postReview: postReview,
}