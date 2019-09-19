const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Podcast = new Schema({
  name: String,
  id: String,
});

module.exports = mongoose.model('Podcast', Podcast);
