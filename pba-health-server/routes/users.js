const express = require('express');
const router = express.Router();
const { ensureLoggedIn } = require('../middleware/token');
const db = require('../db');
const axios = require('axios');

router.get('/dashboard', ensureLoggedIn, (req, res, next) => {
  try {
    const token = req.body._token;

    jwt.verify(token, SECRET_KEY);
    return res.json({ message: `Successfully signed in.` });
  } catch (err) {
    return next(err);
  }
});

router.get('/getAllUsers', (req, res, next) => {
  try {
    const results = db.query(
      `
        SELECT * FROM users
        RETURNING username, email, fullName
    `,
      [username, email, fullName]
    );
    // return results.rows; ???????????
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
