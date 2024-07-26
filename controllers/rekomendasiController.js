const {Rekomendasi} = require('../models');

exports.getAll = async (req, res) => {
  try {
    const rekomendasi = await Rekomendasi.findAll();
    res.json(rekomendasi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const rekomendasi = await Rekomendasi.findByPk(req.params.id);
    if (rekomendasi) {
      res.json(rekomendasi);
    } else {
      res.status(404).json({ message: 'Rekomendasi not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRekomendasi = await Rekomendasi.create(req.body);
    res.status(201).json(newRekomendasi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Rekomendasi.update(req.body, {
      where: { id_rekomendasi: req.params.id },
    });
    if (updated) {
      const updatedRekomendasi = await Rekomendasi.findByPk(req.params.id);
      res.json(updatedRekomendasi);
    } else {
      res.status(404).json({ message: 'Rekomendasi not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Rekomendasi.destroy({
      where: { id_rekomendasi: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Rekomendasi not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
