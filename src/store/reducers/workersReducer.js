/* eslint-disable no-underscore-dangle */

import {
  GET_WORKERS_SUCCESS,
  GET_WORKERS_FAILURE,
  ADD_WORKER_SUCCESS,
  ADD_WORKER_FAILURE,
  EDIT_WORKER_SUCCESS,
  DELETE_WORKER_SUCCESS,
  EDIT_WORKER_FAILURE,
  DELETE_WORKER_FAILURE,
} from '../actions/types';

/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */
const initState = {
  workers: [],
  message: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_WORKERS_SUCCESS:
      return { ...state, workers: action.workers, message: '' };
    case GET_WORKERS_FAILURE:
      return { ...state, workers: action.workers, message: action.message };
    case ADD_WORKER_SUCCESS: {
      const workers = [...state.workers];
      workers.push(action.worker);
      return { ...state, workers, message: '' };
    }
    case ADD_WORKER_FAILURE:
      return { ...state, message: action.message };
    case EDIT_WORKER_SUCCESS: {
      const workers = state.workers.map(item => {
        let current = { ...item };
        if (current._id === action.worker._id) {
          current = { ...action.worker };
        }
        return current;
      });
      return { ...state, workers, message: '' };
    }
    case EDIT_WORKER_FAILURE:
      return { ...state, message: action.message };
    case DELETE_WORKER_SUCCESS: {
      const workers = state.workers.filter(item => item._id !== action.workerId);
      return { ...state, workers, message: '' };
    }
    case DELETE_WORKER_FAILURE:
      return { ...state, message: action.message };
    default:
      return { ...state };
  }
};
