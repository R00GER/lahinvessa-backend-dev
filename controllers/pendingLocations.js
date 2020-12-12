const pendingLocationsRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const PendingLocation = require('../models/PendingLocation');

const getToken = (req) => {
  const authorization = req.get('authorization');

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.split(' ')[1];
  }

  return null;
};

pendingLocationsRouter.get('/', async (req, res) => {
  const pendingLocations = await PendingLocation.find();
  return res.json(pendingLocations);
});

pendingLocationsRouter.post('/', async (req, res, next) => {
  const pendingLocation = req.body;

  const token = getToken(req);
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
    console.log(decodedToken);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return next(error);
    } else {
      return res.status(500).json({ err: error, type: 'unknown error' });
    }
  }

  if (!token) {
    console.log('error, token missing');
    return res.status(401).json({ err: 'token missing' });
  }

  if (decodedToken) {
    const newPendingLocation = new PendingLocation({ ...pendingLocation });
    const savedPendingLocation = await newPendingLocation.save();
    console.log(savedPendingLocation);
    return res.json(savedPendingLocation);
  }
});

pendingLocationsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deletedPendingLocation = await PendingLocation.findByIdAndDelete(id);
  return res.json(deletedPendingLocation);
});

module.exports = pendingLocationsRouter;
