import { RECEIVE_LOANS, REQUEST_LOANS, REQUEST_LOAN_WINNERS, RECEIVE_LOANS_WINNERS } from "./loanActions";

const initialState = {
  isLoading: true,
  loans: [],
  isWinnersLoading: false,
  winners: []
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
    case REQUEST_LOAN_WINNERS:
      return {
        ...state,
        isWinnersLoading: true,
        winners: []
      }
    case RECEIVE_LOANS_WINNERS:
      return {
        ...state,
        isWinnersLoading: false,
        winners: payload
      }
    default:
      return state;
  }
}