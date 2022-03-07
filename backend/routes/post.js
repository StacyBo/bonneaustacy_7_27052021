const express = require('express');
const { post } = require('../app');
const router = express.Router();
postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

router.post('/', auth, postCtrl.addPost);
router.put('/', auth, postCtrl.updatePost);
router.get('/', auth, postCtrl.getPosts);
router.get('/lastposts', auth, postCtrl.getLastPosts);
router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;