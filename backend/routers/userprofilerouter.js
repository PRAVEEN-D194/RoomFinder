const express = require('express');
const router = express.Router();
const {getuserprofile, deleteroom} = require("../controllers/userprofile.js");

router.get('/profile/:email', getuserprofile);
router.delete('/profile/:id', deleteroom);

module.exports = router;