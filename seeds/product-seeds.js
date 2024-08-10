const { Product } = require('../models'); // Import the Product model from the models directory

// Define an array of product data to be seeded into the database
const productData = [
  {
    product_name: 'Plain T-Shirt',               // Name of the product
    price: 14.99,                               // Price of the product
    stock: 14,                                  // Stock quantity of the product
    category_id: 1,                             // Foreign key referencing the Category model
  },
  {
    product_name: 'Running Sneakers',            // Name of the product
    price: 90.0,                                // Price of the product
    stock: 25,                                  // Stock quantity of the product
    category_id: 5,                             // Foreign key referencing the Category model
  },
  {
    product_name: 'Branded Baseball Hat',        // Name of the product
    price: 22.99,                               // Price of the product
    stock: 12,                                  // Stock quantity of the product
    category_id: 4,                             // Foreign key referencing the Category model
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record', // Name of the product
    price: 12.99,                               // Price of the product
    stock: 50,                                  // Stock quantity of the product
    category_id: 3,                             // Foreign key referencing the Category model
  },
  {
    product_name: 'Cargo Shorts',                // Name of the product
    price: 29.99,                               // Price of the product
    stock: 22,                                  // Stock quantity of the product
    category_id: 2,                             // Foreign key referencing the Category model
  },
];

// Function to seed products into the database
const seedProducts = () => Product.bulkCreate(productData);

// Export the seedProducts function for use in other modules, such as seeding scripts
module.exports = seedProducts;
