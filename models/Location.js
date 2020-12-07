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
  ratings: Number,
});

locationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    // delete returnedObject.passwordHash
  },
});

module.exports = mongoose.model('Locations', locationSchema);
