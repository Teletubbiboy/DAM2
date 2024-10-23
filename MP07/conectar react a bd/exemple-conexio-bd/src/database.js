const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('react_mysql_example', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
