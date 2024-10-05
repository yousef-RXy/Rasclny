const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    console.log(userDoc, email, email === 'yousefNasr@gmail.com');
    if (!userDoc) {
      const error = new Error("email doesn't exist");
      error.statusCode = 422;
      throw error;
    }

    const isEqual = await bcrypt.compare(password, userDoc.password);

    if (!isEqual) {
      const error = new Error("password isn't correct");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: userDoc.email,
        userId: userDoc._id.toString(),
      },
      'somesupersecretsecret',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, userId: userDoc._id.toString() });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new Error('validation failed');
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }

    const { email, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashedPassword,
      name,
    });
    const userDoc = await user.save();

    const token = jwt.sign(
      {
        email: userDoc.email,
        userId: userDoc._id.toString(),
      },
      'somesupersecretsecret',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, userId: userDoc._id.toString() });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
