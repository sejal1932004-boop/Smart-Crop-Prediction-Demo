const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // User model ka sahi path

// Register User
const registerUser = async (req, res) => {
  console.log("📥 Incoming Register Request:", req.body);  // Debug log

  const { name, email, password } = req.body;

  try {
    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Sabhi fields required hain" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Password ko hash karna
    const hashedPassword = await bcrypt.hash(password, 10);

    // Naya user create karna
    const newUser = new User({ name, email, password: hashedPassword });

    // Database mein user save karna
    await newUser.save();

    // Success ka response bhejna
    res.status(201).json({ message: "User successfully registered!" });
  } catch (err) {
    console.error("❌ Register mein error:", err);  // Error ko log karna
    res.status(500).json({ message: "Kuch galat ho gaya!" });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // User ko check karna
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User nahi mila" });
    }

    // Password compare karna
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // JWT token banana
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );

    // Token ke saath response bhejna
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("❌ Login mein error:", err);  // Error ko log karna
    res.status(500).json({ message: "Kuch galat ho gaya!" });
  }
};

module.exports = { registerUser, loginUser };
