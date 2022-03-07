const express = require('express');
const router = express.Router();
userCtrl = require('../controllers/user');

router.post('/user', userCtrl.postUser);
router.post('/login', userCtrl.login);
router.post('/auth', userCtrl.auth);

module.exports = router;