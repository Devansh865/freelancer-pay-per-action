const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/test-create', async (req, res) => {
  try {
    const newUser = new User({
      username: 'bulbula',
      walletAddress: 'mera account'
    });
    await newUser.save();
    res.send('User created!');
  } catch (err) {
    res.status(500).send('Error creating user');
  }
});

module.exports = router;
