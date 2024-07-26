const {KarakteristikLahan} = require('../models');

exports.getAll = async (req, res) => {
  try {
    const karakteristikLahan = await KarakteristikLahan.findAll();
    res.json(karakteristikLahan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const karakteristikLahan = await KarakteristikLahan.findByPk(req.params.id);
    if (karakteristikLahan) {
      res.json(karakteristikLahan);
    } else {
      res.status(404).json({ message: 'Karakteristik Lahan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newKarakteristikLahan = await KarakteristikLahan.create(req.body);
    res.status(201).json(newKarakteristikLahan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await KarakteristikLahan.update(req.body, {
      where: { id_karakteristik: req.params.id },
    });
    if (updated) {
      const updatedKarakteristikLahan = await KarakteristikLahan.findByPk(req.params.id);
      res.json(updatedKarakteristikLahan);
    } else {
      res.status(404).json({ message: 'Karakteristik Lahan not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await KarakteristikLahan.destroy({
      where: { id_karakteristik: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Karakteristik Lahan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
