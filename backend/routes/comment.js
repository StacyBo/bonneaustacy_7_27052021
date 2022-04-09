const express = require('express');
const router = express.Router();
commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

router.get('/post/:postId', auth, commentCtrl.getComments);
router.post('/post/:postId', auth, commentCtrl.addComment);
router.put('/:id', auth, commentCtrl.updateComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;