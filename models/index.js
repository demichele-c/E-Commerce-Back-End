// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships

// A Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Foreign key in the Product table
  onDelete: 'SET NULL',      // When the referenced Category is deleted, set category_id to null in Product
});

// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Foreign key in the Product table
  onDelete: 'SET NULL',      // When the referenced Category is deleted, set category_id to null in Product
});

// A Product belongs to many Tags through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,        // Join table for many-to-many relationship
  foreignKey: 'product_id',   // Foreign key in the ProductTag table
  otherKey: 'tag_id',         // Foreign key in the ProductTag table that references Tag
});

// A Tag belongs to many Products through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,        // Join table for many-to-many relationship
  foreignKey: 'tag_id',       // Foreign key in the ProductTag table
  otherKey: 'product_id',     // Foreign key in the ProductTag table that references Product
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
