const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

loginRouter.post('/', async (req, res) => {
  const { body } = req;
  console.log(body);
  const user = await User.findOne({ email: body.email });

  const encryptedPassword = await bcrypt.compare(body.password, user.password);

  if (!(user && encryptedPassword)) {
    return res.json('invalid password/username');
  }

  const userForToken = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  console.log(userForToken);

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' });
  
  res.send({ token, id: user.id, username: user.username, role: user.role });
});

module.exports = loginRouter;
