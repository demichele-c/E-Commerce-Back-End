const router = require('express').Router(); // Import the Express Router to define routes
const apiRoutes = require('./api'); // Import the routes defined in the `api` directory

// Use the `/api` prefix for all routes defined in the `api` directory
router.use('/api', apiRoutes);

// Define a fallback route for any request that doesn't match an existing route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>"); // Send a simple HTML response indicating a wrong route
});

module.exports = router; // Export the router to be used in other parts of the application
