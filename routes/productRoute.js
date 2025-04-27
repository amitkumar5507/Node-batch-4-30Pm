const express = require('express');
const { getProduct } = require('../controllers/productController');
const authToken = require('../middleware/authmiddleware');
const router = express.Router();


router.get("/getProduct",authToken,getProduct)

module.exports = router;