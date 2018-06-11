import { LOGIN_SUCCESS, AUTH_REDIRECT, LOGOUT_SUCCESS } from "./authActions";

const initialState = {
  isAuthenticated: false,
  pending: true,
  userName: null,
  shouldRedirect: false,
  location: null
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userName: payload.userName
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
        userName: null
      }
    default:
      return state;
  }
}