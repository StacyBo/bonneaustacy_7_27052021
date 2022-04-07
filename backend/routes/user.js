const express = require('express');
const router = express.Router();
userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/user', userCtrl.postUser);
router.post('/login', userCtrl.login);
router.post('/auth', userCtrl.auth);
router.delete('/user/delete', auth, userCtrl.deleteUser);

module.exports = router;