const express = require('express');
const router = express.Router();
const logAktivitasController = require('../controllers/logAktivitasController');

// Define routes for LogAktivitas
router.get('/', logAktivitasController.getAll);
router.get('/:id', logAktivitasController.getById);
router.post('/', logAktivitasController.create);
router.put('/:id', logAktivitasController.update);
router.delete('/:id', logAktivitasController.delete);

module.exports = router;
