import React from 'react';
import Countdown, { getTimeDifference } from 'react-countdown-now';
import { Segment, Button } from 'semantic-ui-react';
import { format, differenceInHours } from 'date-fns';
import { getBEMClasses } from '../../../helpers/cssHelper';
import './LoanComponent.css';
import BidModalContainer from './BidModalContainer';

const bemClasses = getBEMClasses('loan');

class Loan extends React.Component {
  constructor(props) {
    super(props);
    const diffFromNow = differenceInHours(props.loan.bidStartTime, new Date());
    const canBid =  getTimeDifference(props.loan.bidStartTime).completed && diffFromNow >= 0 && diffFromNow < 1;
    this.state = { open: false, canBid }
  }


  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  renderConuntdownContent(props) {
    const { hours, minutes, seconds } = props;

    return (
      <div>
        You can bid in {hours}:{minutes}:{seconds}
      </div>
    )
  }

  renderBidButton() {
    const { loan } = this.props;
    if (this.state.canBid) {
      return (
        <Button color="red" onClick={this.show} >Bid now</Button>
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
    return (
      <Segment className={bemClasses()} >
        <div className={bemClasses('info')}>
          <div>
            <div>
              {loan.name}
            </div>
            <div>
              Bid time: {format(loan.bidStartTime, 'DD-MM-YYYY HH:mm')}
            </div>
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



export default Loan;