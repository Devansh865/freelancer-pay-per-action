// freelancer ke action batayega
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  description: String,
  submissionLink: String, // e.g., GitHub repo or file link
  submittedAt: { type: Date, default: Date.now },
  score: Number, // Will be filled by Groq/AI
  paid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
