const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      const error = new Error('not authenticated');
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(' ').at(1);

    const decodedToken = jwt.verify(token, 'somesupersecretsecret');
    if (!decodedToken) {
      const error = new Error('not authenticated');
      error.statusCode = 401;
      throw error;
    }

    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
