const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

function authenticateJWT(req, res, next) {
  try {
    const tokenFromBody = req.body._token;
    const payload = jwt.verify(tokenFromBody, SECRET_KEY);
    req.user = payload;
    return next();
  } catch (err) {
    return next();
  }
}

function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    const err = new Error('Unauthorized', 401);
    return next(err);
  } else {
    return next();
  }
}

module.exports = { authenticateJWT, ensureLoggedIn };
