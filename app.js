const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loginRouter = require('./controllers/login');
const registerRouter = require('./controllers/register');
const locationsRouter = require('./controllers/locations');
const pendingLocationsRouter = require('./controllers/pendingLocations');
const cors = require('cors');

require('dotenv').config();

mongoose.set('useFindAndModify', false);

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.mfcfk.mongodb.net/lahinvessaDB?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to db');
})

app.use(cors());
app.use(express.static('build'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/locations/pending', pendingLocationsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('listening to port 3001');
});
