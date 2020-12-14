const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const redirectHttp = require('./controllers/redirectHttp');
const loginRouter = require('./controllers/login');
const registerRouter = require('./controllers/register');
const locationsRouter = require('./controllers/locations');
const pendingLocationsRouter = require('./controllers/pendingLocations');
const { errorHandler } = require('./errorhandler');
require('express-async-errors');
const cors = require('cors');

require('dotenv').config();

mongoose.set('useFindAndModify', false);

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect(
//   `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.mfcfk.mongodb.net/lahinvessaDB?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log('connected to db!', process.env.MONGODB_URI);
//   }
// );

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to db!', MONGODB_URI);
})

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('*', redirectHttp);
// app.use((req, res, next) => {
//   if (!req.secure) {
//     res.redirect('https://' + req.headers.host + req.url);
//   }
// });

app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/locations/pending', pendingLocationsRouter);
app.use('/api/locations', locationsRouter);

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.use('*', express.static(path.join(__dirname, 'build', 'index.html')));
}

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});

app.use(errorHandler);
