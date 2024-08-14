const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Initialize the Tag model by extending Sequelize's Model class
class Tag extends Model {}

// Set up fields and rules for the Tag model
Tag.init(
  {
    // Define the columns for the Tag model
    id: {
      type: DataTypes.INTEGER, // Column type is INTEGER
      allowNull: false, // This column cannot be null
      primaryKey: true, // This column is the primary key
      autoIncrement: true, // Automatically increment this column
    },
    tag_name: {
      type: DataTypes.STRING, // Column type is STRING
      //allowNull: false,            // Errors during seeding as null values are being passed, so I commented this out
    },
  },
  {
    sequelize, // Pass the sequelize instance to the model
    timestamps: false, // Do not add timestamp fields (createdAt, updatedAt)
    freezeTableName: true, // Use the table name as is, do not pluralize it
    underscored: true, // Use snake_case for column names
    modelName: 'tag', // Define the model name as 'tag'
  }
);

module.exports = Tag; // Export the Tag model for use in other parts of the application
