const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pengguna = require('./Pengguna');
const LogAktivitas = sequelize.define('LogAktivitas', {
  id_log: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pengguna: {
    type: DataTypes.INTEGER,
    references: {
      model: Pengguna,
      key: 'id_pengguna',
    },
  },
  waktu_aktivitas: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  aksi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detail_aktivitas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = LogAktivitas;
