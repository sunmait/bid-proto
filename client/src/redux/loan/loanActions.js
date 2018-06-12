import { SubmissionError } from 'redux-form';
import { addSeconds, subHours } from 'date-fns';
export const REQUEST_LOANS = 'REQUEST_LOANS';
export const RECEIVE_LOANS = 'RECEIVE_LOANS';


const loans = [
  { name: 'loan 1', bidStartTime: subHours(new Date(), 2), },
  { name: 'loan 2', bidStartTime: addSeconds(new Date(), 10), },
  { name: 'loan 3', bidStartTime: addSeconds(new Date(), 2), }
]

export const fetchLoans = () => async dispatch => {
  dispatch(requestLoans());
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch(receiveLoans(loans));
      resolve();
    }, 500);
  });
}

export const requestLoans = () => ({
  type: REQUEST_LOANS
});

export const receiveLoans = payload => ({
  type: RECEIVE_LOANS,
  payload
});

export const bid = (payload, loan) => async dispatch => {
  console.log(payload, loan);
  throw new SubmissionError({ _error: 'general'})

}