import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

API.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `${localStorage.getItem('token')}`;
    }

    // eslint-disable-next-line no-param-reassign
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => Promise.reject(error)
);

API.interceptors.response.use(
  response => {
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  },
  error => {
    localStorage.clear();
    return Promise.reject(error);
  }
);
export default API;
