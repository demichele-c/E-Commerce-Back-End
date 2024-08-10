const { ProductTag } = require('../models'); // Import the ProductTag model from the models directory

// Define an array of product-tag associations to be seeded into the database
const productTagData = [
  {
    product_id: 1, // ID of the product
    tag_id: 6,     // ID of the tag associated with the product
  },
  {
    product_id: 1, // ID of the product
    tag_id: 7,     // ID of the tag associated with the product
  },
  {
    product_id: 1, // ID of the product
    tag_id: 8,     // ID of the tag associated with the product
  },
  {
    product_id: 2, // ID of the product
    tag_id: 6,     // ID of the tag associated with the product
  },
  {
    product_id: 3, // ID of the product
    tag_id: 1,     // ID of the tag associated with the product
  },
  {
    product_id: 3, // ID of the product
    tag_id: 3,     // ID of the tag associated with the product
  },
  {
    product_id: 3, // ID of the product
    tag_id: 4,     // ID of the tag associated with the product
  },
  {
    product_id: 3, // ID of the product
    tag_id: 5,     // ID of the tag associated with the product
  },
  {
    product_id: 4, // ID of the product
    tag_id: 1,     // ID of the tag associated with the product
  },
  {
    product_id: 4, // ID of the product
    tag_id: 2,     // ID of the tag associated with the product
  },
  {
    product_id: 4, // ID of the product
    tag_id: 8,     // ID of the tag associated with the product
  },
  {
    product_id: 5, // ID of the product
    tag_id: 3,     // ID of the tag associated with the product
  },
];

// Function to seed product-tag associations into the database
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

// Export the seedProductTags function for use in other modules, such as seeding scripts
module.exports = seedProductTags;
