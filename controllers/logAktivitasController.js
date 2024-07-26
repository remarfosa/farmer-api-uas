const {LogAktivitas} = require('../models');

exports.getAll = async (req, res) => {
  try {
    const logAktivitas = await LogAktivitas.findAll();
    res.json(logAktivitas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const logAktivitas = await LogAktivitas.findByPk(req.params.id);
    if (logAktivitas) {
      res.json(logAktivitas);
    } else {
      res.status(404).json({ message: 'Log Aktivitas not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newLogAktivitas = await LogAktivitas.create(req.body);
    res.status(201).json(newLogAktivitas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await LogAktivitas.update(req.body, {
      where: { id_log: req.params.id },
    });
    if (updated) {
      const updatedLogAktivitas = await LogAktivitas.findByPk(req.params.id);
      res.json(updatedLogAktivitas);
    } else {
      res.status(404).json({ message: 'Log Aktivitas not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await LogAktivitas.destroy({
      where: { id_log: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Log Aktivitas not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
