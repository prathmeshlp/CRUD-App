// app.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});

