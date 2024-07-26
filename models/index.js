// models/index.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = require('../config/database');

// Import models
const Lokasi = require('./Lokasi');
const KarakteristikLahan = require('./KarakteristikLahan');
const Tanaman = require('./Tanaman');
const KriteriaLahan = require('./KriteriaLahan');
const Rekomendasi = require('./Rekomendasi');
const Pengguna = require('./Pengguna');
const LogAktivitas = require('./LogAktivitas');

// Define relationships
Lokasi.hasOne(KarakteristikLahan, { foreignKey: 'id_lokasi' });
KarakteristikLahan.belongsTo(Lokasi, { foreignKey: 'id_lokasi' });

Tanaman.hasOne(KriteriaLahan, { foreignKey: 'id_tanaman' });
KriteriaLahan.belongsTo(Tanaman, { foreignKey: 'id_tanaman' });

Lokasi.hasMany(Rekomendasi, { foreignKey: 'id_lokasi' });
Rekomendasi.belongsTo(Lokasi, { foreignKey: 'id_lokasi' });

Tanaman.hasMany(Rekomendasi, { foreignKey: 'id_tanaman' });
Rekomendasi.belongsTo(Tanaman, { foreignKey: 'id_tanaman' });

Pengguna.hasMany(LogAktivitas, { foreignKey: 'id_pengguna' });
LogAktivitas.belongsTo(Pengguna, { foreignKey: 'id_pengguna' });

module.exports = {
  sequelize,
  Lokasi,
  KarakteristikLahan,
  Tanaman,
  KriteriaLahan,
  Rekomendasi,
  Pengguna,
  LogAktivitas,
};
