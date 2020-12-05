const registerRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

registerRouter.post('/', async (req, res) => {
  const { body } = req;
  console.log('hitted');

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);

  const newUser = new User({
    username: body.username,
    email: body.email,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  res.json(savedUser);
});

module.exports = registerRouter;