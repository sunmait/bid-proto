import { LOGIN_SUCCESS, AUTH_REDIRECT, LOGOUT_SUCCESS, SET_AUTH_TOKEN } from "./authActions";

const initialState = {
  isAuthenticated: false,
  pending: true,
  username: null,
  userId: null,
  shouldRedirect: false,
  location: null
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: payload.username,
        userId: payload.userId,
        pending: false
      }
    case AUTH_REDIRECT:
      return {
        ...state,
        ...payload
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        pending: false,
      }
    case SET_AUTH_TOKEN:
      return {
        ...state,
        userId: payload
      }
    default:
      return state;
  }
}