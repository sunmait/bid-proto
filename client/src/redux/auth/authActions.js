import axios from "axios";
import { SubmissionError } from 'redux-form';
import { fetchLoans } from "../loan/loanActions";
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const AUTH_REDIRECT = 'AUTH_REDIRECT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

export const login = creds => async dispatch => {
  return axios.post('login', creds).then(response => {
    dispatch(performLogin(response.data.userId, response.data.username));
  }).catch(error => {
    throw new SubmissionError({ _error: error.response.data })
  });
}

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  dispatch(logoutSuccess())
}

export const checkAuthToken = () => dispatch => {
  const token = localStorage.getItem('token');

  if(token) {
    const username = localStorage.getItem('username');
    dispatch(performLogin(token, username));
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

export const setAuthToken = payload => ({
  type: SET_AUTH_TOKEN,
  payload
})

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

export const performLogin = (userId, username) => async dispatch => {

  dispatch(setAuthToken(userId))
  await dispatch(fetchLoans());
  localStorage.setItem('token', userId)
  localStorage.setItem('username', username);
  dispatch(loginSuccess(userId, username));
}