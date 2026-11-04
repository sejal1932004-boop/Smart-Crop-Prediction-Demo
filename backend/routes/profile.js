const express = require('express');
const authenticate = require('../middleware/authMiddleware'); // Import middleware
const router = express.Router();

// Protected route example: /profile
router.get('/profile', authenticate, (req, res) => {
  // req.user contains the decoded token data
  res.status(200).json({ message: "Welcome to your profile!", userId: req.user.userId });
});

module.exports = router;
