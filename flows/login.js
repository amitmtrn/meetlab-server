const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const config = require('../config/config');

async function verifyUser(data) {
  const user = await User.findOne({username: data.username});

  if(!user) {
    throw new Error('user not exists');
  }

  const isVerified = await bcrypt.compare(data.password, user.password);

  if(!isVerified) {
    throw new Error('password is invalid');
  }

  return user.toObject();
}

function createJWT(data) {
  const user = {id: data._id, name: data.username};

  return {
    token: jwt.sign(user, config.jwt.key)
  }
}

module.exports = [
  verifyUser,
  createJWT
];