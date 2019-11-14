/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */

const express = require('express');
const bodyParser = require('body-parser');
const workers = require('./routers/worker');
const user = require('./routers/user');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, PATCH');
  next();
});

// eslint-disable-next-line consistent-return
mongoose.connect('mongodb://localhost:27017/workertest', { useNewUrlParser: true }, err => {
  // eslint-disable-next-line no-console
  if (err) return console.log(err);
  app.listen(8080, () => {
    // eslint-disable-next-line no-console
    console.log('server is start magic on ', 8080);
  });
});

app.use('/api/workers', workers);
app.use('/api/', user);
