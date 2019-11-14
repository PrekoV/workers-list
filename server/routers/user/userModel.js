/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */
const mongoose = require('mongoose');
const bcrypts = require('bcrypt');

const { Schema } = mongoose;
const userScheme = new Schema(
  {
    login: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: { type: String, unique: true, required: true, trim: true },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

userScheme.pre('save', function(next) {
  const user = this;
  bcrypts.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

userScheme.statics.authenticate = (email, password, callback) => {
  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return callback(err);
    }
    if (!user) {
      const newErr = new Error('User not found.');
      newErr.status = 401;
      return callback(newErr);
    }
    bcrypts.compare(password, user.password, (_err, result) => {
      if (result) {
        return callback(null, user);
      }
      return callback();
    });
  });
};

const User = mongoose.model('User', userScheme);
module.exports = User;
