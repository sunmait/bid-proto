import { connect } from 'react-redux';
import WinnersPageComponent from './WinnersPageComponent';
import { fetchLoanWinners } from '../../redux/loan/loanActions';

const mapStateToProps = (state, props) => {
  return {
    winners: state.loan.winners,
    loan: state.loan.loans.find(loan => loan.id === +props.match.params.id),
    isLoading: state.loan.isWinnersLoading
  }
}

const mapDispatchToProps = {
  fetchLoanWinners
}

export default connect(mapStateToProps, mapDispatchToProps)(WinnersPageComponent);