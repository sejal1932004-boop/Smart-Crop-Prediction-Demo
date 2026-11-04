const express = require('express');
const router = express.Router();
const predictCrop = require('../controllers/predictionController');

// POST route for crop prediction
router.post('/crop-recommend', predictCrop);

module.exports = router;
