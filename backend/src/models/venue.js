const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true }
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
