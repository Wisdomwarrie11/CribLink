const express = require('express');
const router = express.Router();
const authMiddleware = require('./middleware/auth');
const User = require('./models/User');

// Protected route to get the authenticated user's details
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
