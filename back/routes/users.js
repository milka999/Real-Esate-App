// routes/users.js
const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required and should be minimum 6 characters').isLength({ min: 6 }),
    check('email', 'Please include a valid email').isEmail(),
    check('role', 'Role is required').not().isEmpty()
  ],
  userController.register
);

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  userController.login
);

// @route   GET api/auth
// @desc    Get logged-in user
// @access  Private
router.get('/me', auth, userController.getUser);

module.exports = router;
