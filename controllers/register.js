const registerRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

registerRouter.post('/', async (req, res) => {
  const { body } = req;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);

  const usernameTaken = await User.findOne({ username: body.username })

  if (!usernameTaken) {
    const newUser = new User({
      username: body.username,
      email: body.email,
      password: hashedPassword,
    });
  
    const savedUser = await newUser.save();
  
    return res.json(savedUser);
  } else {
    return res.status(409).json({ err: 'username taken' })
  }

});

module.exports = registerRouter;