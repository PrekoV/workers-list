/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';
import API from '../../api';

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  auth: true,
});

const loginFailure = message => ({
  type: LOGIN_FAILURE,
  auth: false,
  message,
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  auth: false,
});

const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
  auth: true,
});

const registerFailure = message => ({
  type: REGISTER_FAILURE,
  auth: false,
  message,
});

export const login = data => dispatch => {
  if (!data) return dispatch(loginFailure());
  return API.post('/login', data)
    .then(
      () => dispatch(loginSuccess()),
      rej => dispatch(loginFailure(rej.response.data.message))
    )
    .catch(e => {
      dispatch(loginFailure('Something went wrong'));
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
      rej => dispatch(registerFailure(rej.response.data.message))
    )
    .catch(e => {
      dispatch(loginFailure('Something went wrong'));
      throw e;
    });
};

export default {
  register,
  logout,
  login,
};
