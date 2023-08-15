// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  dob: Date,
  gender: String,
  education: String,
  company: String,
  experience: Number,
  package: Number
});

module.exports = mongoose.model('User', userSchema);
