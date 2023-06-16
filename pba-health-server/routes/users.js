const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/all', async (req, res, next) => {
  try {
    const results = await db.query(`SELECT * FROM users`);
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
