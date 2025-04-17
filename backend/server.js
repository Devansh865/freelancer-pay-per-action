
const express = require("express");
const cors = require("cors");
const verifyWithGroq = require("./groq");

require("dotenv").config();

// main entry point


const mongoose = require('mongoose');


const app = express();
app.use(cors());
app.use(express.json());


app.post("/verify", async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await verifyWithGroq(prompt);
    const reply = result.choices[0].message.content;
    res.json({ success: true, reply });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`🚀 Backend running at http://localhost:${PORT}`);
// });
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

const ClientRoutes = require('./routes/clientRoutes');
app.use('/api/client', ClientRoutes);


// CONNECT TO MONGO
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  }).catch(err => {
    console.error("❌ MongoDB connection error:", err);
  });

