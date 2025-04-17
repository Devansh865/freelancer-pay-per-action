const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String,required: true },
  password: { type: String,required: true }, 
  CompanyName: {type: String},
});

module.exports = mongoose.model('Client', clientSchema);
