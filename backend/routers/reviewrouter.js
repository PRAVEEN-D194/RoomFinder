const express = require('express');
const router = express.Router();
const { getSingleReview } = require('../controllers/review');
const {postReview} = require('../controllers/review');

router.get('/rooms/:id/review', getSingleReview);
router.post('/review', postReview);
module.exports = router;