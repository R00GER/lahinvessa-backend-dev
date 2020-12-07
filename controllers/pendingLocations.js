const pendingLocationsRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const PendingLocation = require('../models/PendingLocation');

const getToken = (req) => {
  const authorization = req.get('authorization');
  console.log('from get token', authorization.split(' ')[1]);

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.split(' ')[1];
  }
  return null;
};

pendingLocationsRouter.get('/', async (req, res) => {
  const pendingLocations = await PendingLocation.find();
  res.json(pendingLocations);
});

pendingLocationsRouter.post('/', async (req, res) => {
  const pendingLocation = req.body;

  const token = getToken(req);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    console.log('error, token missing');
    return res.status(401).json({ error: 'token missing' });
  }

  const newPendingLocation = new PendingLocation({ ...pendingLocation });
  await newPendingLocation.save();
  console.log(newPendingLocation);
  res.json(newPendingLocation);
});

pendingLocationsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deletedPendingLocation = await PendingLocation.findByIdAndDelete(id);
  res.json(deletedPendingLocation);
});

module.exports = pendingLocationsRouter;
