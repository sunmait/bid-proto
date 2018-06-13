import { SubmissionError } from 'redux-form';
import axios from 'axios';

export const REQUEST_LOANS = 'REQUEST_LOANS';
export const RECEIVE_LOANS = 'RECEIVE_LOANS';

export const fetchLoans = () => async (dispatch) => {
  dispatch(requestLoans());
  const response = await axios.get('loans');
  dispatch(receiveLoans(response.data));
}

export const requestLoans = () => ({
  type: REQUEST_LOANS
});

export const receiveLoans = payload => ({
  type: RECEIVE_LOANS,
  payload
});

export const bid = (payload, loan) => async dispatch => {
  return axios.post(`loans/${loan.id}/bid`, payload).catch(error => {
    throw new SubmissionError({ _error: error.response.data })
  });

}