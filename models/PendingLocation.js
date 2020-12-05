const mongoose = require('mongoose');
const { Schema } = mongoose;

const pendingLocationSchema = new Schema({
  name: { type: String, required: true },
  type: String,
  payable: String,
  services: Array,
  validated: Boolean,
  lat: Number,
  lng: Number,
});

pendingLocationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    // delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('pendingLocations', pendingLocationSchema);
