import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT_SUCCESS } from '../actions/types';

/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */

const initState = {
  auth: localStorage.getItem('token'),
};

export default (state = { ...initState }, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return { ...state, auth: action.auth, message: action.message };
    case LOGIN_SUCCESS:
      return { ...state, auth: action.auth, message: '' };
    case REGISTER_SUCCESS:
      return { ...state, auth: action.auth, message: '' };
    case REGISTER_FAILURE:
      return { ...state, auth: action.auth, message: action.message };
    case LOGOUT_SUCCESS:
      return { ...state, auth: action.auth, message: '' };
    default:
      return { ...state };
  }
};
