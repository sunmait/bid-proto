export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const AUTH_REDIRECT = 'AUTH_REDIRECT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


export const login = creds => async dispatch => {
  // TODO: login

  dispatch(loginSuccess({ userName: creds.userName }))
}

export const logout = () => async dispatch => {
  // TODO: logout

  dispatch(logoutSuccess())
}

const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
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