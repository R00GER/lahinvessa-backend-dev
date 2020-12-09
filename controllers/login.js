const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

loginRouter.post('/', async (req, res) => {
  console.log('HITTED');
  const { body } = req;
  console.log(body);
  const user = await User.findOne({ email: body.email });
  console.log(user);

  const encryptedPassword = await bcrypt.compare(body.password, user.password);

  if (!(user && encryptedPassword)) {
    return res.status(401).json({ err: 'invalid password or username' });
  }

  const userForToken = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' });
  
  return res.json({ token, id: user.id, username: user.username, role: user.role });
});

module.exports = loginRouter;
