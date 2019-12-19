const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const config = require('../config/config');

async function encryptPassword(data) {
  const password = await bcrypt.hash(data.password, config.bcrypt.salt);

  return {...data, password}
}

async function saveUsernameAndPasswordToDB(data) {
  const existingUser = await User.findOne({username: data.username});

  if(existingUser) {
    throw new Error('user already exists');
  }

  const userDetails = await User.create({username: data.username, password: data.password, interests: data.interests});

  return {...data, userId: userDetails.id};
}

function createJWT(data) {
  const user = {id: data.userId, name: data.username};

  return {
    token: jwt.sign(user, config.jwt.key)
  }
}

module.exports = [
  encryptPassword, 
  saveUsernameAndPasswordToDB, 
  createJWT
];