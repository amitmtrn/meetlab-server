const validateLogin = require('./validate_login');
const Post = require('../models/Post');

async function getPostsRelateToInterest(data) {
  const regex = new RegExp(`.*(${data.user.interests.join('|')}).*`)
  const posts = await Post.find({ 'content' : { $regex: regex, $options: 'i' } });

  return { posts }
}

module.exports = [...validateLogin, getPostsRelateToInterest];