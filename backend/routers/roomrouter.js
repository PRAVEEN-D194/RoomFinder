const express = require('express');
const { getRooms } = require('../controllers/room');
const { getSingleRoom } = require('../controllers/room');
const router = express.Router();

router.get('/rooms', getRooms);
router.get('/rooms/:id', getSingleRoom);
module.exports = router;