const {Lokasi} = require('../models');

exports.getAll = async (req, res) => {
  try {
    const lokasi = await Lokasi.findAll();
    res.json(lokasi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const lokasi = await Lokasi.findByPk(req.params.id);
    if (lokasi) {
      res.json(lokasi);
    } else {
      res.status(404).json({ message: 'Lokasi not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newLokasi = await Lokasi.create(req.body);
    res.status(201).json(newLokasi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Lokasi.update(req.body, {
      where: { id_lokasi: req.params.id },
    });
    if (updated) {
      const updatedLokasi = await Lokasi.findByPk(req.params.id);
      res.json(updatedLokasi);
    } else {
      res.status(404).json({ message: 'Lokasi not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Lokasi.destroy({
      where: { id_lokasi: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Lokasi not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
