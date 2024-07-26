const {Tanaman} = require('../models');

exports.getAll = async (req, res) => {
  try {
    const tanaman = await Tanaman.findAll();
    res.json(tanaman);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const tanaman = await Tanaman.findByPk(req.params.id);
    if (tanaman) {
      res.json(tanaman);
    } else {
      res.status(404).json({ message: 'Tanaman not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newTanaman = await Tanaman.create(req.body);
    res.status(201).json(newTanaman);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Tanaman.update(req.body, {
      where: { id_tanaman: req.params.id },
    });
    if (updated) {
      const updatedTanaman = await Tanaman.findByPk(req.params.id);
      res.json(updatedTanaman);
    } else {
      res.status(404).json({ message: 'Tanaman not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Tanaman.destroy({
      where: { id_tanaman: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Tanaman not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
