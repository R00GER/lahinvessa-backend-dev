const locationsRouter = require('express').Router();
const Location = require('../models/Location');
const PendingLocation = require('../models/PendingLocation');

locationsRouter.get('/', async (req, res) => {
  const locations = await Location.find();
  return res.json(locations);
});

locationsRouter.post('/', async (req, res) => {
  const location = req.body;

  const newLocation = new Location({
    ...location,
  });

  const savedLocation = await newLocation.save();

  res.json(savedLocation);
});

locationsRouter.post('/', async (req, res) => {
  const location = req.body;

  const newValidatedLocation = new Location({ ...location });
  const savedLocation = await newValidatedLocation.save();
  res.json(savedLocation);
});

locationsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const sumOfRatings = body.ratings.reduce((acc, cur) => acc + cur);

  const ratedLocation = {
    ...body,
    rating: sumOfRatings / body.ratings.length,
  };

  const savedRatedLocation = await Location.findOneAndUpdate({ _id: id }, ratedLocation, { new: true });
  res.json(savedRatedLocation);
});

locationsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deletedLocation = await Location.findByIdAndDelete(id);
  return res.json(deletedLocation);
})

module.exports = locationsRouter;
