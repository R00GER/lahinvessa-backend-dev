const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: { type: String, required: true },
  type: String,
  payable: String,
  services: Array,
  validated: Boolean,
  lat: Number,
  lng: Number,
  rating: Number,
  ratings: Array,
});

locationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Locations', locationSchema);
