const express = require('express');
const router = express.Router();
const lokasiController = require('../controllers/lokasiController');

// Define routes for Lokasi
router.get('/', lokasiController.getAll);
router.get('/:id', lokasiController.getById);
router.post('/', lokasiController.create);
router.put('/:id', lokasiController.update);
router.delete('/:id', lokasiController.delete);

module.exports = router;
