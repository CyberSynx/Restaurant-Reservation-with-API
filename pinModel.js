const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model('Pin', pinSchema);