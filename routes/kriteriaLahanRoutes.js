const express = require('express');
const router = express.Router();
const kriteriaLahanController = require('../controllers/kriteriaLahanController');

router.post('/',  kriteriaLahanController.create);
router.get('/',  kriteriaLahanController.findAll);
router.get('/:id', kriteriaLahanController.findOne);
router.put('/:id', kriteriaLahanController.update);
router.delete('/:id', kriteriaLahanController.delete);

module.exports = router;
