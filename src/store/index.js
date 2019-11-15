/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint linebreak-style: ["error", "unix"] */

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
