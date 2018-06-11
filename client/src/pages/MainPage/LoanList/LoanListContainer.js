import { connect } from 'react-redux';
import LoanListComponent from './LoanListComponent';


const mapStateToProps = state => {
  return {
    loans: state.loan.loans,
    isLoading: state.loan.isLoading
  }
};

export default connect(mapStateToProps)(LoanListComponent);