const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste-node', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;