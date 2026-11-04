const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const axios = require('axios'); // Flask API call ke liye

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Crop Recommendation Route
router.post('/crop-recommend', async (req, res) => {
  const formData = req.body;
  console.log("Received data from frontend:", formData);

  try {
    // Flask API ko POST request bhej rahe hain
    const response = await axios.post('http://127.0.0.1:5001/predict', formData);

    // Flask se aayi prediction ko frontend ko bhejna
    res.json(response.data);
  } catch (error) {
    console.error("Error calling Flask API:", error.message);
    res.status(500).json({ error: "Crop prediction failed" });
  }
});

module.exports = router;
