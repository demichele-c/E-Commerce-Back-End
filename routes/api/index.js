const router = require('express').Router(); // Import the Express Router to handle routing

// Import route modules for different models
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Set up middleware to use the imported routes
router.use('/categories', categoryRoutes); // Routes for handling requests to /api/categories
router.use('/products', productRoutes); // Routes for handling requests to /api/products
router.use('/tags', tagRoutes); // Routes for handling requests to /api/tags

module.exports = router; // Export the router to be used in the main application
