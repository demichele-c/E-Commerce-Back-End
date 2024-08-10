const { Tag } = require('../models'); // Import the Tag model from the models directory

// Define an array of tag data to be seeded into the database
const tagData = [
  {
    tag_name: 'rock music', // Name of the tag
  },
  {
    tag_name: 'pop music',  // Name of the tag
  },
  {
    tag_name: 'blue',       // Name of the tag
  },
  {
    tag_name: 'red',        // Name of the tag
  },
  {
    tag_name: 'green',      // Name of the tag
  },
  {
    tag_name: 'white',      // Name of the tag
  },
  {
    tag_name: 'gold',       // Name of the tag
  },
  {
    tag_name: 'pop culture',// Name of the tag
  },
];

// Function to seed tags into the database
const seedTags = () => Tag.bulkCreate(tagData);

// Export the seedTags function for use in other modules, such as seeding scripts
module.exports = seedTags;
