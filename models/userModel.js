//userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  Email: String,
  color: String,
  bday: String,
});

module.exports = mongoose.model('User', userSchema);