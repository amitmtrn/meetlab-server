const Post = require('../models/Post');
const validateLogin = require('./validate_login');

async function addPostToDB(data) {
  await Post.create({content: data.content, comments: []})

  return {
    success: true
  };
}

module.exports = [...validateLogin, addPostToDB];