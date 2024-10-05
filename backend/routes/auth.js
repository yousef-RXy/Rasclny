const express = require('express');
const { check } = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.post(
  '/login',
  [
    check('email')
      .isEmail()
      .withMessage('please enter a valid email')
      .normalizeEmail(),
    check('password').trim().isLength({ min: 5 }).withMessage('wrong password'),
  ],
  authController.login
);

router.put(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('please enter a valid email')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('email already exist');
          }
        });
      })
      .normalizeEmail(),
    check('password')
      .trim()
      .isLength({ min: 5 })
      .withMessage('password too short'),
    check('name').trim().not().isEmpty().withMessage('name is required'),
  ],
  authController.signup
);

module.exports = router;
