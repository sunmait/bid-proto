import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import { withRouter } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';
import { format, distanceInWordsToNow, isPast, isFuture, addSeconds } from 'date-fns';
import { getBEMClasses } from '../../../helpers/cssHelper';
import './LoanComponent.css';
import BidModalContainer from './BidModalContainer';

const bemClasses = getBEMClasses('loan');

class Loan extends React.Component {
  constructor(props) {
    super(props);
    const canBid = isPast(props.loan.bidStartTime) && isFuture(addSeconds(props.loan.bidStartTime, props.loan.bidTimeDurationSeconds));
    this.state = { open: false, canBid }
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  renderConuntdownContent(props) {
    const { date } = props;
    const text = distanceInWordsToNow(date, { includeSeconds: true });
    return (
      <div>
        You can bid in {text}
      </div>
    )
  }

  renderBidButton() {
    const { loan } = this.props;
    if (this.state.canBid) {
      return (
        <Button color="red" onClick={this.show}>Bid now</Button>
      )
    } else {
      return (
        <Countdown date={loan.bidStartTime} onComplete={() => this.setState({ canBid: true })} renderer={this.renderConuntdownContent} />
      )
    }
  }

  render() {
    const { loan } = this.props;
    const { open } = this.state;
    const { history } = this.context.router;

    return (
      <Segment className={bemClasses()} >
        <div className={bemClasses('info')}>
          <div>
            <div>
              {loan.label}
            </div>
            <div>
              Bid time: {format(loan.bidStartTime, 'DD-MM-YYYY HH:mm')}
            </div>
            <Button onClick={() => { history.push(`/winners/${loan.id}`) }}>Show winners</Button>
          </div>
          <div>
            {this.renderBidButton()}
          </div>
        </div>
        {open && (
          <BidModalContainer loan={loan} open={open} close={this.close} />
        )}
      </Segment>
    )
  }
}

Loan.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  }).isRequired
};


export default withRouter(Loan);