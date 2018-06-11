import { RECEIVE_LOANS, REQUEST_LOANS } from "./loanActions";

const initialState = {
  isLoading: false,
  loans: []
};

export default function loanReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_LOANS:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_LOANS:
      return {
        ...state,
        isLoading: false,
        loans: payload
      }
    default:
      return state;
  }
}