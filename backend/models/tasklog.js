// holds actions freelancers completed
const mongoose = require('mongoose');

const taskLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
  screenData: { type: Object }, 
  score: { type: Number },       
  isPaid: { type: Boolean, default: false }
});

module.exports = mongoose.model('TaskLog', taskLogSchema);
