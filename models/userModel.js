//userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Email: String,
  username: String,
  name: String,
  ipaddress: Number
});

module.exports = mongoose.model('User', userSchema);