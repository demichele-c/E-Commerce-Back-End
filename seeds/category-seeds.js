const { Category } = require('../models'); // Import the Category model from the models directory

// Define an array of category data to be seeded into the database
const categoryData = [
  {
    category_name: 'Shirts', // Category entry for 'Shirts'
  },
  {
    category_name: 'Shorts', // Category entry for 'Shorts'
  },
  {
    category_name: 'Music', // Category entry for 'Music'
  },
  {
    category_name: 'Hats', // Category entry for 'Hats'
  },
  {
    category_name: 'Shoes', // Category entry for 'Shoes'
  },
];

// Function to seed categories into the database
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the seedCategories function for use in other modules, such as seeding scripts
module.exports = seedCategories;
