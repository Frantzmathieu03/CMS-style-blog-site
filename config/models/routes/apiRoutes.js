const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');

// User routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Post routes
router.post('/posts', postController.createPost);
router.get('/posts/:id', postController.getPost);

module.exports = router;
