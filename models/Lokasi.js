// models/Lokasi.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lokasi = sequelize.define('Lokasi', {
  id_lokasi: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_lokasi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kecamatan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Lokasi;
