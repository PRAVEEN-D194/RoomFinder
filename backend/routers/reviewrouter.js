const express = require('express');
const router = express.Router();
const { getSingleReview } = require('../controllers/review');

router.get('/review/:id', getSingleReview);
module.exports = router;