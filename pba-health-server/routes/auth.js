const express = require('express');
const router = new express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');
const { ensureLoggedIn } = require('../middleware/token');

router.get('/', (req, res, next) => {
  res.send('fuck');
});

router.post('/register', async (req, res, next) => {
  try {
    const { username, email, fullName, password } = req.body;
    if (!username || !email || !fullName || !password) {
      throw new Error('Invalid Input', 400);
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    // save to database
    const results = await db.query(
      `
        INSERT INTO users (username, email, fullName, password)
        VALUES ($1, $2, $3, $4)
        RETURNING username
    `,
      [username, email, fullName, hashedPassword]
    );
    const user = results.rows[0];
    let token = jwt.sign({ username }, SECRET_KEY);
    return res.json({ message: `Successfully created your account. Welcome ${username}`, user, token });
  } catch (err) {
    return next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error('Invalid Input', 400);
    }
    const results = await db.query(
      `
        SELECT username, password
        FROM users
        WHERE username = $1
    `,
      [username]
    );
    const user = results.rows[0];
    if (user) {
      if ((await bcrypt.compare(password, user.password)) === true) {
        let token = jwt.sign({ username }, SECRET_KEY);
        return res.json({ message: `Login successful, welcome back ${username}`, token });
      }
    }
    throw new Error('User not found', 400);
  } catch (err) {
    return next(err);
  }
});

router.get('/dashboard', ensureLoggedIn, (req, res, next) => {
  try {
    const token = req.body._token;

    jwt.verify(token, SECRET_KEY);
    return res.json({ message: `Successfully signed in.` });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
