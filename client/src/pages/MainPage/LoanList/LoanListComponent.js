import React from 'react';
import LoanComponent from './LoanComponent';
import { Loader } from 'semantic-ui-react';


const LoanList = props => {
  return (
    <div>
      {props.isLoading ? (
        <Loader active={props.isLoading} inline="centered" />
      ) : (
          props.loans.map((loan, index) => {
            return <LoanComponent key={index} loan={loan} />
          })
        )}
    </div>
  );
}

export default LoanList;