import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import format from 'date-fns/format';
import { getBEMClasses } from '../../../helpers/cssHelper';
import './LoanComponent.css';
import BidModalContainer from './BidModalContainer';

const bemClasses = getBEMClasses('loan');

class Loan extends React.Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

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
            <Button color="red" onClick={this.show} >Bid now</Button>
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