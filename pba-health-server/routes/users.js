const express = require('express');
const router = express.Router();
const { ensureLoggedIn } = require('../middleware/token');
const db = require('../db');

router.get('/dashboard', ensureLoggedIn, (req, res, next) => {
  try {
    const token = req.body._token;

    jwt.verify(token, SECRET_KEY);
    return res.json({ message: `Successfully signed in.` });
  } catch (err) {
    return next(err);
  }
});

router.get('/getAllUsers', async (req, res, next) => {
  try {
    const results = await db.query(
      `
        SELECT username, email, fullName FROM users
      `,
      []
    );
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
