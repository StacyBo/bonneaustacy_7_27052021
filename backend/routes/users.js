const express = require('express');
const router = express.Router();
userCtrl = require('../controllers/users');

router.post('/users', userCtrl.postUser);
router.post('/login', userCtrl.login);
router.post('/auth', userCtrl.auth);

module.exports = router;