import axios from 'axios';
import store from '../redux/store';
import history from '../helpers/history';

export function configure() {
  const { token } = store.getState().auth;
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export function initializeAxios() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  axios.interceptors.response.use(response => {
    if(response.status === 401) {
      history.push('./login');
    }
  })
}