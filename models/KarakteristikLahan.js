// models/KarakteristikLahan.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Lokasi = require('./Lokasi');

const KarakteristikLahan = sequelize.define('KarakteristikLahan', {
  id_karakteristik: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_lokasi: {
    type: DataTypes.INTEGER,
    references: {
      model: Lokasi,
      key: 'id_lokasi',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  curah_hujan: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  suhu: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  intensitas_cahaya: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  kelembapan_udara: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = KarakteristikLahan;
