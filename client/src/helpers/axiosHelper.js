import axios from 'axios';
import store from '../redux/store';
import history from '../helpers/history';

export function initializeAxios() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  axios.interceptors.response.use(response => {
    if(response.status === 401) {
      history.push('./login');
      return;
    }
    return response;
  });
  
  axios.interceptors.request.use(config => {
    const { userId } = store.getState().auth;
    config.headers["userId"] = userId
    return config;
  })
}