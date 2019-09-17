const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  favorites: []
});

module.exports = mongoose.model('User', User);
