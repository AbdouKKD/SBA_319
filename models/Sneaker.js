const mongoose = require('mongoose');

const SneakerSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  size: { type: Number, required: true },
  colorway: { type: String },
  status: { type: String, enum: ['Owned', 'Wishlist', 'Sold'], default: 'Wishlist' },
  price: { type: Number },
  releaseDate: { type: Date },
});

module.exports = mongoose.model('Sneaker', SneakerSchema);