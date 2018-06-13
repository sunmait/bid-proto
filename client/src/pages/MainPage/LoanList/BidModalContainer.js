import { reduxForm } from 'redux-form';
import BidModal from './BidModal';
import { bid } from '../../../redux/loan/loanActions';

const form = reduxForm({
  form: 'loanBid',
  onSubmit: (payload, dispatch, props) => dispatch(bid(payload, props.loan)).then(props.close)
})(BidModal);

export default form;