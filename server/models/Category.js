const db = require('../db');

module.exports = db.define('category', {
  name: db.Sequelize.STRING,
});
