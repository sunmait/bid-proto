import React from 'react';
import { Segment, Loader } from 'semantic-ui-react';

import './WinnersPageComponent.css';
import { getBEMClasses } from '../../helpers/cssHelper';
import HeaderContainer from '../../components/Header/HeaderContainer';
import withAuthentication from '../../hocs/withAuthentication';
import { format } from 'date-fns';

const bemClasses = getBEMClasses('winners-page');

class WinnersPage extends React.Component {
  componentDidMount() {
    this.props.fetchLoanWinners(+this.props.match.params.id)
  }

  renderWinners() {
    return this.props.winners.map((winner, index) => {
      return (
        <Segment key={index}>
          <div>User Name: {winner.username}</div>
          <div>Bid amount: {winner.amount}</div>
          <div>Bidding date: {format(winner.biddingDate, 'DD-MM-YYYY')}</div>
          <div>Bid date: {format(winner.bidDate, 'DD-MM-YYYY HH:mm')}</div>
        </Segment>
      )
    })
  }

  render() {
    return (
      <div className={bemClasses()} >
        <HeaderContainer />
        <header className={bemClasses('header')} >
          Winners of {this.props.loan.label}
        </header>
        {this.props.isLoading ? (
          <Loader active={this.props.isLoading} inline="centered" />
        ) : (
            <React.Fragment>
              {this.renderWinners()}
            </React.Fragment>

          )}

      </div>
    )
  }
}

export default withAuthentication(WinnersPage);