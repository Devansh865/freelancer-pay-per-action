// const express = require('express');
// const router = express.Router();
// const Client = require('../models/client.js');

// router.get('/client-create', async (req, res) => {
//   try {
//     const newUser = new Client({
//       username: 'bulbula',
//       email: 'mera account',
//       password: 'ruhjy778',
//       CompanyName:'Apple'
//     });
//     await newUser.save();
//     res.send('Client created!');
//   } catch (err) {
//     res.status(500).send('Error creating Client');
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Client = require('../models/client.js');

// Sign up client
router.post('/signup', async (req, res) => {
  const { username, email, password, companyName } = req.body;
  try {
    const newClient = new Client({ username, email, password, CompanyName: companyName });
    await newClient.save();
    res.status(201).json({ message: 'Client registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering client', error: err.message });
  }
});

// Login client
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const client = await Client.findOne({ email, password });
    if (!client) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: 'Client login successful', role: 'client' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
