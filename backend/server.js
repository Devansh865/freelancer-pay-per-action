const express = require("express");
const cors = require("cors");
const verifyWithGroq = require("./groq");

require("dotenv").config();

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

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
