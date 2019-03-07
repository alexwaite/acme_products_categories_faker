const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

module.exports = db;

// const Sequelize = require('sequelize');
// const db = new Sequelize(
//   'postgres://localhost:5432/acme_products_categories_faker'
// );

// const Category = db.define('category', {
//   name: db.Sequelize.STRING,
// });

// const Product = db.define('product', {
//   name: db.Sequelize.STRING,
// });

// const syncAndSeed = () => {
//   return db.sync({ force: true });
// };

// module.exports = {
//   syncAndSeed,
//   models: {
//     Category,
//     Product,
//   },
// };
