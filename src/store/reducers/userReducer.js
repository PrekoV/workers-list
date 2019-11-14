import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT_SUCCESS } from '../actions/types';

/* eslint linebreak-style: ["error", "windows"] */

const initState = {
  auth: false,
};

export default (state = { ...initState }, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return { ...state, auth: action.auth };
    case LOGIN_SUCCESS:
      return { ...state, auth: action.auth };
    case REGISTER_SUCCESS:
      return { ...state, auth: action.auth };
    case REGISTER_FAILURE:
      return { ...state, auth: action.auth };
    case LOGOUT_SUCCESS:
      return { ...state, auth: action.auth };
    default:
      return { ...state };
  }
};
