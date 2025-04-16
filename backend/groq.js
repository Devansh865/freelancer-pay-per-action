const axios = require("axios");
require("dotenv").config();

const verifyWithGroq = async (inputPrompt) => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "mixtral-8x7b-32768",
        messages: [
          { role: "system", content: "You are a task verification AI." },
          { role: "user", content: inputPrompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Groq API error:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = verifyWithGroq;
