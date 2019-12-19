const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  interests: [String]
});

module.exports = mongoose.model('user', userSchema);