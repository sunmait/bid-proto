import axios from "axios";
import { SubmissionError } from 'redux-form';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const AUTH_REDIRECT = 'AUTH_REDIRECT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


export const login = creds => async dispatch => {
  return axios.post('login', creds).then(response => {
    localStorage.setItem('token', response.data.userId)
    localStorage.setItem('username', response.data.username);
    dispatch(loginSuccess(response.data.userId, response.data.username));
  }).catch(error => {
    throw new SubmissionError({ _error: error.response.data })
  });
}

export const logout = () => async dispatch => {
  // TODO: logout

  dispatch(logoutSuccess())
}

export const checkAuthToken = () => dispatch => {
  const token = localStorage.getItem('token');

  if(token) {
    const username = localStorage.getItem('username');
    
    dispatch(loginSuccess(token, username))
  } else {
    dispatch(logoutSuccess())
  }
}

export const loginSuccess = (userId, username) => ({
  type: LOGIN_SUCCESS,
  payload: {
    userId,
    username
  }
});

export const redirectFromLogin = location => ({
  type: AUTH_REDIRECT,
  payload: {
    shouldRedirect: !!location,
    location
  }
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})