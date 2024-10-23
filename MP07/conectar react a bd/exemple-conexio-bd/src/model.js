const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Usuari = sequelize.define('Usuari', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Usuari;
