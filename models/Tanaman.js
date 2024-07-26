const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tanaman = sequelize.define('Tanaman', {
  id_tanaman: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_tanaman: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Tanaman;
