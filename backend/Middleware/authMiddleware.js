const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET; // Now using the secret from .env

// Middleware function to authenticate token
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');  // Extract token from Authorization header
  
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);  // Verify the token using the secret from .env
    req.user = decoded;  // Attach user info (decoded token) to the request object
    next();  // Continue to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = authenticate;
