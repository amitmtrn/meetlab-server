const validateLogin = require('./validate_login');
const Post = require('../models/Post');

async function addCommentToPost(data) {
  await Post.findByIdAndUpdate(data.postId, {$push:{comments: {user: data.user._id, content: data.content}}});

  return {
    success: true
  };
}

module.exports = [...validateLogin, addCommentToPost];