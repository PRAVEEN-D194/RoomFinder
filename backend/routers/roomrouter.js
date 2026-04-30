const express = require('express');
const { getRooms } = require('../controllers/room');
const { getSingleRoom } = require('../controllers/room');
const {postRoom,} = require('../controllers/room');
const router = express.Router();

router.get('/rooms', getRooms);
router.get('/rooms/:id', getSingleRoom);
router.post('/rooms', postRoom);
module.exports = router;