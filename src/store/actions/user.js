/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';
import API from '../../api';

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  auth: false,
});

const loginFailure = () => ({
  type: LOGIN_FAILURE,
  auth: true,
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  auth: false,
});

const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
  auth: true,
});

const registerFailure = () => ({
  type: REGISTER_FAILURE,
  auth: false,
});

export const login = data => dispatch => {
  if (!data) return dispatch(loginFailure());
  return API.post('/login', data)
    .then(
      () => dispatch(loginSuccess()),
      () => dispatch(loginFailure())
    )
    .catch(e => {
      throw e;
    });
};

export const logout = () => dispatch => {
  dispatch(logoutSuccess());
};

export const register = data => dispatch => {
  if (!data) return dispatch(registerFailure());
  return API.post('register', data)
    .then(
      () => dispatch(registerSuccess()),
      () => dispatch(registerFailure())
    )
    .catch(e => {
      throw e;
    });
};

export default {
  register,
  logout,
  login,
};
