/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import workersReducer from './workersReducer';

export default combineReducers({ userReducer, workersReducer });
