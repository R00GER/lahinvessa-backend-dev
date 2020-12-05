const locationsRouter = require('express').Router();
const Location = require('../models/Location');
const PendingLocation = require('../models/PendingLocation');

locationsRouter.get('/', async (req, res) => {
  const locations = await Location.find();
  console.log(locations);
  return res.json(locations);
});

locationsRouter.post('/', async (req, res) => {
  const location = req.body;

  const newLocation = new Location({
    ...location,
  });

  const savedLocation = await newLocation.save();

  res.json(savedLocation);
  console.log(savedLocation);
});

locationsRouter.post('/', async (req, res) => {
  const location = req.body;
  console.log(location._id);

  const newValidatedLocation = new Location({ ...location });
  const savedLocation = await newValidatedLocation.save();
  console.log(savedLocation);
  res.json(savedLocation);
});

locationsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  console.log(body.ratings);

  const ratedLocation = {
    ...body,
    ratings: body.ratings + 1,
  };

  const savedRatedLocation = await Location.findOneAndUpdate(id, ratedLocation, { new: true });
  console.log(savedRatedLocation);
  res.json(savedRatedLocation);
});

module.exports = locationsRouter;
