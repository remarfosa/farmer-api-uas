const express = require('express');
const router = express.Router();
const karakteristikLahanController = require('../controllers/karakteristikLahanController');

// Define routes for KarakteristikLahan
router.get('/', karakteristikLahanController.getAll);
router.get('/:id', karakteristikLahanController.getById);
router.post('/', karakteristikLahanController.create);
router.put('/:id', karakteristikLahanController.update);
router.delete('/:id', karakteristikLahanController.delete);

module.exports = router;
