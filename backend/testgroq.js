const axios = require('axios');

const apiKey = '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';

axios.post('https://api.groq.com/openai/v1/chat/completions', {
    model: "llama3-8b-8192", // ✅ current stable

  messages: [
    { role: 'user', content: 'Hello! Can you tell me a joke?' }
  ]
}, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
}).then(res => {
  console.log('✅ Groq is working!\n');
  console.log(res.data.choices[0].message.content);
}).catch(err => {
  console.error('❌ Error occurred:');
  console.error(err.response?.data || err.message);
});
