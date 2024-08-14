// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships

// A Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

// A Product belongs to many Tags through ProductTag
// Found this in the Sequelize documentation: https://sequelize.org/master/manual/assocs.html#many-to-many-relationships
Product.belongsToMany(Tag, {
  through: { model: ProductTag },
});

// A Tag belongs to many Products through ProductTag
// Found this in the Sequelize documentation: https://sequelize.org/master/manual/assocs.html#many-to-many-relationships
Tag.belongsToMany(Product, {
  through: { model: ProductTag },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
