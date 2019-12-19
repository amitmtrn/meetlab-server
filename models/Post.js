const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  content: String,
  comments: [{
    user: mongoose.SchemaTypes.ObjectId,
    content: String,
  }]
});

module.exports = mongoose.model('post', postSchema);