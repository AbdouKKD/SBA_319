const express = require('express');
const connectDB = require('./config/mongoose'); // Connect to the database
const userRoutes = require('./routes/userRoutes'); // Import user routes
const sneakerRoutes = require('./routes/sneakerRoutes'); // Import sneaker routes
const commentRoutes = require('./routes/commentRoutes'); // Import comment routes

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/sneakers', sneakerRoutes); // Sneaker routes
app.use('/api/comments', commentRoutes); // Comment routes

// Default route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});