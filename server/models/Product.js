const db = require('../db');

module.exports = db.define('product', {
  name: db.Sequelize.STRING,
  dummy: db.Sequelize.STRING,
});
