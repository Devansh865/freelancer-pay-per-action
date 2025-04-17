// const express = require('express');
// const router = express.Router();
// const User = require('../models/user.js');

// router.get('/test-create', async (req, res) => {
//   try {
//     const newUser = new User({
//       username: 'bulbula',
//       walletAddress: 'mera account'
//     });
//     await newUser.save();
//     res.send('User created!');
//   } catch (err) {
//     res.status(500).send('Error creating user');
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// Sign up freelancer
router.post('/signup', async (req, res) => {
  const { username, email, password, walletAddress } = req.body;
  try {
    const newUser = new User({ username, email, password, walletAddress });
    await newUser.save();
    res.status(201).json({ message: 'Freelancer registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering freelancer', error: err.message });
  }
});

// Login freelancer
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: 'Freelancer login successful', role: 'freelancer' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;

