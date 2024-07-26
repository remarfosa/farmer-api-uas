const express = require('express');
const router = express.Router();
const penggunaController = require('../controllers/penggunaController');
const auth = require ('../middleware/auth');
// Define routes for Pengguna
router.post('/register', penggunaController.register);
router.post('/login', penggunaController.login);
router.get('/',auth, penggunaController.getAllUsers);
router.get('/:id', auth,penggunaController.getUser);
router.put('/:id',auth, penggunaController.updateUser);
router.delete('/:id',auth, penggunaController.deleteUser);

module.exports = router;
