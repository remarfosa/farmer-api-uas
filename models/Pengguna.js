const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Pengguna = sequelize.define('Pengguna', {
  id_pengguna: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama_lengkap: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: async (pengguna) => {
      pengguna.password = await bcrypt.hash(pengguna.password, 10);
    },
    beforeUpdate: async (pengguna) => {
      if (pengguna.changed('password')) {
        pengguna.password = await bcrypt.hash(pengguna.password, 10);
      }
    },
  },
});

module.exports = Pengguna;
