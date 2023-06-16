const express = require('express');
const router = express.Router();
const { ensureLoggedIn } = require('../middleware/token');


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
