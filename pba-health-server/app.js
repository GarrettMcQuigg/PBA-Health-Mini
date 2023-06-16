const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const { authenticateJWT } = require('./middleware/token');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(authenticateJWT);
app.use(cors());

// Routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
