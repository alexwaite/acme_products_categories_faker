const db = require('../db');
const Product = require('./product');
const Category = require('./category');

Product.belongsTo(Category);
Category.hasMany(Product);

module.exports = { Product, Category };
