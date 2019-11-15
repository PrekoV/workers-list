import {
  GET_WORKERS_SUCCESS,
  ADD_WORKER_SUCCESS,
  ADD_WORKER_FAILURE,
  EDIT_WORKER_SUCCESS,
  EDIT_WORKER_FAILURE,
  DELETE_WORKER_SUCCESS,
  DELETE_WORKER_FAILURE,
} from './types';
import API from '../../api';

/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */

const getWorkersSuccess = workers => ({
  type: GET_WORKERS_SUCCESS,
  workers,
});

const getWorkersFailure = message => ({
  type: GET_WORKERS_SUCCESS,
  message,
});

const addWorkerSuccess = worker => ({
  type: ADD_WORKER_SUCCESS,
  worker,
});

const addWorkerFailure = message => ({
  type: ADD_WORKER_FAILURE,
  message,
});

const editWorkerSuccess = worker => ({
  type: EDIT_WORKER_SUCCESS,
  worker,
});

const editWorkerFailure = message => ({
  type: EDIT_WORKER_FAILURE,
  message,
});

const deleteWorkerSuccess = workerId => ({
  type: DELETE_WORKER_SUCCESS,
  workerId,
});

const deleteWorkerFailure = message => ({
  type: DELETE_WORKER_FAILURE,
  message,
});

export const getWorkers = () => dispatch =>
  API.get('/workers')
    .then(
      res => dispatch(getWorkersSuccess(res.data)),
      rej => dispatch(getWorkersFailure(rej.message))
    )
    .catch(e => {
      dispatch(getWorkersFailure('Something went wrong'));
      throw e;
    });

export const addWorker = data => dispatch =>
  API.post('/workers', data)
    .then(
      res => dispatch(addWorkerSuccess(res.data)),
      rej => dispatch(addWorkerFailure(rej.response.data.message))
    )
    .catch(e => {
      dispatch(addWorkerFailure('Something went wrong'));
      throw e;
    });

export const editWorker = data => dispatch =>
  API.put(`/workers/${data.id}`, data)
    .then(
      res => dispatch(editWorkerSuccess(res.data)),
      rej => dispatch(editWorkerFailure(rej.response.data.message))
    )
    .catch(e => {
      dispatch(editWorkerFailure('Something went wrong'));
      throw e;
    });

export const deleteWorker = id => dispatch =>
  API.delete(`/workers/${id}`)
    .then(
      () => dispatch(deleteWorkerSuccess(id)),
      rej => dispatch(deleteWorkerFailure(rej.response.data.message))
    )
    .catch(e => {
      dispatch(deleteWorkerFailure('Something went wrong'));
      throw e;
    });

export default { deleteWorker, editWorker, addWorker, getWorkers };
