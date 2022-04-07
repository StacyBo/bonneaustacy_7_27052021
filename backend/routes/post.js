const express = require('express');
const { post } = require('../app');
const router = express.Router();
postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postCtrl.addPost);
router.patch('/:id', auth, multer, postCtrl.updatePost);
router.get('/', auth, postCtrl.getPosts);
router.get('/lastposts', auth, postCtrl.getLastPosts);
router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;