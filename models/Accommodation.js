// models/Accommodation.js
const mongoose = require('mongoose');

const AccommodationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  features: [String],
  agent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Accommodation', AccommodationSchema);
