const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tanaman = require('./Tanaman');

const KriteriaLahan = sequelize.define('KriteriaLahan', {
  id_kriteria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_tanaman: {
    type: DataTypes.INTEGER,
    references: {
      model: Tanaman,
      key: 'id_tanaman',
    },
  },
  curah_hujan_ideal: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  suhu_ideal: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  intensitas_cahaya_ideal: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  kelembapan_udara_ideal: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = KriteriaLahan;
