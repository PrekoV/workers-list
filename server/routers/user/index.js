/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */

const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const router = express.Router();

const User = require('./userModel');

router.post('/login', (req, res, next) => {
  const userBody = req.body;
  User.authenticate(userBody.email, userBody.password, (error, user) => {
    if (error || !user) {
      return res.status(401).send({ message: 'Wrong email or password.' });
    }
    const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });
    res.status(200).send({ auth: true, token });
  });
});

router.post('/register', (req, res, next) => {
  const userData = req.body;
  User.create(userData, (error, user) => {
    if (error) {
      return res.status(500).send({ message: 'User already exists' });
    }
    const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });
    res.status(200).send({ auth: true, token });
  });
});

module.exports = router;
