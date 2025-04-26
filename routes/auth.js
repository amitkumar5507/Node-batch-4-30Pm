const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const authToken = require("../middleware/authmiddleware")

router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.get('/protected',authToken,authController.protected);
module.exports = router;