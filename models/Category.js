const { Model, DataTypes } = require('sequelize'); // Import Model and DataTypes from Sequelize
const sequelize = require('../config/connection.js'); // Import Sequelize instance from config

// Define Category model by extending Sequelize's Model class
class Category extends Model {}

// Initialize Category model (table) with fields and options
Category.init(
  {
    // Define columns and their properties
    id: {
      type: DataTypes.INTEGER, // Column type
      allowNull: false,       // Column cannot be null
      primaryKey: true,       // Column is the primary key
      autoIncrement: true,    // Auto-increment the value for each new record
    },
    category_name: {
      type: DataTypes.STRING, // Column type
      allowNull: false,       // Column cannot be null
    },
  },
  {
    sequelize,                // Pass the Sequelize instance
    timestamps: false,        // Disable automatic timestamp columns (createdAt, updatedAt)
    freezeTableName: true,    // Use the table name as-is without pluralizing it
    underscored: true,        // Use snake_case for column names
    modelName: 'category',    // Model name for Sequelize
  }
);

module.exports = Category; // Export the Category model
