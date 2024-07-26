const {KriteriaLahan} = require('../models');

exports.create = async (req, res) => {
  try {
    const kriteriaLahan = await KriteriaLahan.create(req.body);
    res.status(201).json(kriteriaLahan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const kriteriaLahans = await KriteriaLahan.findAll();
    res.json(kriteriaLahans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const kriteriaLahan = await KriteriaLahan.findByPk(req.params.id);
    if (!kriteriaLahan) {
      return res.status(404).json({ error: 'KriteriaLahan not found' });
    }
    res.json(kriteriaLahan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await KriteriaLahan.update(req.body, { where: { id_kriteria: req.params.id } });
    if (!updated) {
      return res.status(404).json({ error: 'KriteriaLahan not found' });
    }
    const updatedKriteriaLahan = await KriteriaLahan.findByPk(req.params.id);
    res.json(updatedKriteriaLahan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await KriteriaLahan.destroy({ where: { id_kriteria: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'KriteriaLahan not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
