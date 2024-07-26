const {Pengguna} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const { username, password, role, nama_lengkap } = req.body;
    const pengguna = await Pengguna.create({ username, password, role, nama_lengkap });
    res.status(201).json(pengguna);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const pengguna = await Pengguna.findOne({ where: { username } });
    if (!pengguna || !await bcrypt.compare(password, pengguna.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: pengguna.id_pengguna, role: pengguna.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const pengguna = await Pengguna.findAll();
    res.json(pengguna);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const pengguna = await Pengguna.findByPk(req.params.id);
    if (!pengguna) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(pengguna);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const pengguna = await Pengguna.update(req.body, { where: { id_pengguna: req.params.id } });
    if (!pengguna[0]) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updatedPengguna = await Pengguna.findByPk(req.params.id);
    res.json(updatedPengguna);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const pengguna = await Pengguna.destroy({ where: { id_pengguna: req.params.id } });
    if (!pengguna) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
