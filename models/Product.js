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
      type: DataTypes.INTEGER,       // Column type is INTEGER
      allowNull: false,              // This column cannot be null
      primaryKey: true,              // This column is the primary key
      autoIncrement: true,           // Automatically increment this column
    },
    product_name: {
      type: DataTypes.STRING,        // Column type is STRING
      allowNull: false,              // This column cannot be null
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Column type is DECIMAL with 10 digits total and 2 decimal places
      allowNull: false,              // This column cannot be null
    },
    stock: {
      type: DataTypes.INTEGER,       // Column type is INTEGER
      allowNull: false,              // This column cannot be null
      defaultValue: 0,               // Default value for this column
    },
    category_id: {
      type: DataTypes.INTEGER,       // Column type is INTEGER
      references: {
        model: 'category',           // This column references the 'category' model
        key: 'id',                   // The foreign key refers to the 'id' column in the 'category' model
      },
    },
  },
  {
    sequelize,                      // Pass the sequelize instance to the model
    timestamps: false,              // Do not add timestamp fields (createdAt, updatedAt)
    freezeTableName: true,          // Use the table name as is, do not pluralize it
    underscored: true,              // Use snake_case for column names
    modelName: 'product',           // Define the model name as 'product'
  }
);

module.exports = Product;            // Export the Product model for use in other parts of the application
