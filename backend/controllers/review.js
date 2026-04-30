const getSingleReview = (req, res, next) => {
    res.json({
        success: true,
        message: "Single review fetched successfully",
    });
}
module.exports = {
    getSingleReview: getSingleReview,
}