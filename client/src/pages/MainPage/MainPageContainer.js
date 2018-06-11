import { connect } from 'react-redux';
import MainPageComponent from './MainPageComponent';
import { fetchLoans } from '../../redux/loan/loanActions';

const mapDispatchToProps = {
  fetchLoans: fetchLoans
};

export default connect(null, mapDispatchToProps)(MainPageComponent);