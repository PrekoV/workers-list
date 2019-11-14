/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */

const express = require('express');

const router = express.Router();

const Worker = require('./workerModel');

router.get('/', (req, res, next) => {
  const token = req.headers.authorization;

  Worker.verify(token, error => {
    if (error) {
      return next(error);
    }
    Worker.find({}, (err, workers) => {
      if (err) return res.status(404).send({ message: 'Something went wrong' });
      next(workers);
    });
  });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const currentValues = req.body;
  const token = req.headers.authorization;

  if (!currentValues) res.sendStatus(400);

  Worker.verify(token, error => {
    if (error) {
      return next(error);
    }
    Worker.findOneAndUpdate({ _id: id }, currentValues, { new: true }, (err, worker) => {
      if (err) return res.status(404).send({ message: 'User not found' });
      res.send(worker);
    });
  });
});

router.post('/', (req, res, next) => {
  const newWorker = req.body;
  const token = req.headers.authorization;

  if (!newWorker) return res.sendStatus(400);
  const worker = new Worker(newWorker);
  Worker.verify(token, error => {
    if (error) {
      return next(error);
    }
    worker.save(err => {
      if (err) return res.status(404).send({ message: 'Something went wrong', err });
      res.send(worker);
    });
  });
});

router.delete('/:id', (req, res, next) => {
  const token = req.headers.authorization;
  const { id } = req.params;

  Worker.verify(token, error => {
    if (error) {
      return res.send(error);
    }
    Worker.findByIdAndDelete({ _id: id }, errReq => {
      if (errReq) return res.status(404).send({ message: 'Not found user' });
      res.sendStatus(200);
    });
  });
});

module.exports = router;
