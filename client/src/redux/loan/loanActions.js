import { SubmissionError } from 'redux-form';

export const REQUEST_LOANS = 'REQUEST_LOANS';
export const RECEIVE_LOANS = 'RECEIVE_LOANS';


const loans = [
  { name: 'loan 1', bidStartTime: new Date(2018, 6, 5), },
  { name: 'loan 2', bidStartTime: new Date(2018, 6, 4), },
  { name: 'loan 3', bidStartTime: new Date(2018, 6, 3), }
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