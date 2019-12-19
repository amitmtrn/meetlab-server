const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.mongodb.url, {useNewUrlParser: true,  useUnifiedTopology: true });