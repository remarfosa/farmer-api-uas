const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Lokasi = require('./Lokasi');
const Tanaman = require('./Tanaman');

const Rekomendasi = sequelize.define('Rekomendasi', {
  id_rekomendasi: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_lokasi: {
    type: DataTypes.INTEGER,
    references: {
      model: Lokasi,
      key: 'id_lokasi',
    },
  },
  id_tanaman: {
    type: DataTypes.INTEGER,
    references: {
      model: Tanaman,
      key: 'id_tanaman',
    },
  },
  peringkat_kecocokan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Rekomendasi;
