const jwt = require('jsonwebtoken');

const User = require('../models/User');
const config = require('../config/config');

function decodeToken(data) {
  const user = jwt.verify(data.token, config.jwt.key);

  return {...data, user};
}

async function getUserFromDB(data) {
  if(!data.user.id) {
    throw new Error('missing user id');
  }

  const user = await User.findById(data.user.id);
  
  if(!user) {
    throw new Error('user does not exists!');
  }

  return {
    ...data,
    user
  };
}

module.exports = [
  decodeToken,
  getUserFromDB
];