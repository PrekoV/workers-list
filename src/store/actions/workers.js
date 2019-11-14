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

const getWorkersSuccess = workers => ({
  type: GET_WORKERS_SUCCESS,
  workers,
});

const getWorkersFailure = () => ({
  type: GET_WORKERS_SUCCESS,
});

const addWorkerSuccess = worker => ({
  type: ADD_WORKER_SUCCESS,
  worker,
});

const addWorkerFailure = () => ({
  type: ADD_WORKER_FAILURE,
});

const editWorkerSuccess = worker => ({
  type: EDIT_WORKER_SUCCESS,
  worker,
});

const editWorkerFailure = () => ({
  type: EDIT_WORKER_FAILURE,
});

const deleteWorkerSuccess = workerId => ({
  type: DELETE_WORKER_SUCCESS,
  workerId,
});

const deleteWorkerFailure = () => ({
  type: DELETE_WORKER_FAILURE,
});

export const getWorkers = () => dispatch =>
  API.get('/workers')
    .then(
      res => dispatch(getWorkersSuccess(res.data)),
      () => dispatch(getWorkersFailure())
    )
    .catch(e => {
      dispatch(getWorkersFailure());
      throw e;
    });

export const addWorker = data => dispatch =>
  API.post('/workers', data)
    .then(
      res => dispatch(addWorkerSuccess(res.data)),
      () => dispatch(addWorkerFailure())
    )
    .catch(e => {
      dispatch(addWorkerFailure());
      throw e;
    });

export const editWorker = data => dispatch =>
  API.put(`/workers/${data.id}`, data)
    .then(
      res => dispatch(editWorkerSuccess(res.data)),
      () => dispatch(editWorkerFailure())
    )
    .catch(e => {
      dispatch(editWorkerFailure());
      throw e;
    });

export const deleteWorker = id => dispatch =>
  API.delete(`/workers/${id}`)
    .then(
      () => dispatch(deleteWorkerSuccess(id)),
      () => dispatch(deleteWorkerFailure())
    )
    .catch(e => {
      dispatch(deleteWorkerFailure());
      throw e;
    });

export default { deleteWorker, editWorker, addWorker, getWorkers };
