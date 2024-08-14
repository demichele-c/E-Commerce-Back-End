const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Initialize the ProductTag model by extending Sequelize's Model class
class ProductTag extends Model {}

// Set up fields and rules for the ProductTag model
ProductTag.init(
  {
    // Missing your primary key ID in the model //
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Define the columns for the ProductTag model
    product_id: {
      type: DataTypes.INTEGER, // Column type is INTEGER
      allowNull: false, // This column cannot be null
      references: {
        model: 'product', // This column references the 'product' model
        key: 'id', // The foreign key refers to the 'id' column in the 'product' model
        unique: false, // Not sure if it's necessary to specify unique: false here but I did
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, // Column type is INTEGER
      allowNull: false, // This column cannot be null
      references: {
        model: 'tag', // This column references the 'tag' model
        key: 'id', // The foreign key refers to the 'id' column in the 'tag' model
        unique: false, // Not sure if it's necessary to specify unique: false here but I did
      },
    },
  },
  {
    sequelize, // Pass the sequelize instance to the model
    timestamps: false, // Do not add timestamp fields (createdAt, updatedAt)
    freezeTableName: true, // Use the table name as is, do not pluralize it
    underscored: true, // Use snake_case for column names
    modelName: 'product_tag', // Define the model name as 'product_tag'
  }
);

module.exports = ProductTag; // Export the ProductTag model for use in other parts of the application
