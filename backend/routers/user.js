const express = require("express");
const {getUser} = require("../controllers/user.js");
const {postUser}=require("../controllers/user.js");
const router = express.Router();

router.post('/login', getUser);
router.post('/signup', postUser);

module.exports = router;