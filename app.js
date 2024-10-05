// app.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const accommodationRoutes = require('./routes/accommodation');
const itemRoutes = require('./routes/item');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000', // Replace this with your frontend URL if different
    credentials: true, // Allow credentials like cookies if necessary
  }));

// Load environment variables
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/accommodations', accommodationRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
