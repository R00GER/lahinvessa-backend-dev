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
const MONGODB_URI = process.env.MONGODB_URI

// mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.mfcfk.mongodb.net/lahinvessaDB?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//   console.log('connected to db!', process.env.MONGODB_URI);
// })


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to db!', MONGODB_URI);
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/locations/pending', pendingLocationsRouter);

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static('build'))
  app.use('*', express.static(path.join(__dirname, "build", 'index.html')))
}

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});
