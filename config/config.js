const bcrypt = require('bcrypt');

module.exports = {
  bcrypt: {
    salt: bcrypt.genSaltSync(10)
  },
  jwt: {
    key: 'pP("4cZj&U)*Q[+e'
  },
  mongodb: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/meetlab'
  }
}