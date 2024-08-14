// Import important parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize the Product model by extending Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for the Product model
Product.init(
  {
    // Define the columns for the Product model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Column type is DECIMAL with 10 digits total and 2 decimal places
      allowNull: false,
      validate: {
        isDecimal: true, // Was missing the validation for isDecimal that was specified in the instructions
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Default value is 10
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false, // Not sure if it's necessary to specify unique: false here but I did
      },
    },
  },
  {
    sequelize, // Pass the sequelize instance to the model
    timestamps: false, // Do not add timestamp fields (createdAt, updatedAt)
    freezeTableName: true, // Use the table name as is, do not pluralize it
    underscored: true, // Use snake_case for column names
    modelName: 'product', // Define the model name as 'product'
  }
);

module.exports = Product; // Export the Product model for use in other parts of the application
