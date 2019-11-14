/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const { Schema } = mongoose;
const workerScheme = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    contact: {
      type: String,
      required: true,
      trim: true,
      unique: false,
    },
    sex: {
      type: String,
      unique: false,
      required: true,
    },
    dateAdd: {
      type: Date,
      required: true,
      unique: false,
    },
    rate: {
      type: Number,
      required: true,
      unique: false,
    },
    position: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
  },
  { versionKey: false }
);

// eslint-disable-next-line consistent-return
workerScheme.statics.verify = (token, callback) => {
  if (!token) {
    const newErr = new Error('not authorizated');
    newErr.status = 401;
    return callback(newErr);
  }
  jwt.verify(token, config.secret, err => {
    if (err) {
      const newErr = new Error('Failed to authenticate token');
      newErr.status = 500;
      return callback(newErr);
    }
    return callback();
  });
};

const Worker = mongoose.model('Worker', workerScheme);

module.exports = Worker;