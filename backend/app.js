require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');  // Import Auth routes
const profileRoutes = require('./routes/profile');  // Import Profile routes
const predictionRoutes = require('./routes/prediction');  // Import Prediction routes

const app = express();

// CORS Middleware setup
const corsOptions = {
  origin: "https://smart-crop-frontend-3ns9.onrender.com",  // Set your frontend URL here
  methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"],  // Allowed headers
};

app.use(cors(corsOptions));  // Apply CORS middleware
app.use(express.json());  // Middleware to parse JSON request bodies

// MongoDB connection using MONGO_URI from .env file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Connected");
}).catch(err => {
  console.log("MongoDB Error:", err);  // Handle any connection errors
});

// Routes
app.use('/api', authRoutes);  // Authentication routes
app.use('/api', profileRoutes);  // Profile routes
app.use('/api/prediction', predictionRoutes);  // Prediction routes for crop recommendation

module.exports = app;  // Export the app for use in server.js
