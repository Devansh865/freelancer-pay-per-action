const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

router.post('/submit', async (req, res) => {
  try {
    const { userId, title, description, submissionLink } = req.body;

    const task = new Task({ userId, title, description, submissionLink });
    await task.save();

    res.status(201).json({ message: 'Task submitted successfully!', task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
