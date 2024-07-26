const express = require('express');
const router = express.Router();
const tanamanController = require('../controllers/tanamanController');

// Define routes for Tanaman
router.get('/', tanamanController.getAll);
router.get('/:id', tanamanController.getById);
router.post('/', tanamanController.create);
router.put('/:id', tanamanController.update);
router.delete('/:id', tanamanController.delete);

module.exports = router;
