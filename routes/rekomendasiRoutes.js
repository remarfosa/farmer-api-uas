const express = require('express');
const router = express.Router();
const rekomendasiController = require('../controllers/rekomendasiController');

// Define routes for Rekomendasi
router.get('/', rekomendasiController.getAll);
router.get('/:id', rekomendasiController.getById);
router.post('/', rekomendasiController.create);
router.put('/:id', rekomendasiController.update);
router.delete('/:id', rekomendasiController.delete);

module.exports = router;
