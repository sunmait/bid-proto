import React from 'react';
import withAuthentication from '../../hocs/withAuthentication';

import './MainPageComponent.css';
import { getBEMClasses } from '../../helpers/cssHelper';
import LoanListContainer from './LoanList/LoanListContainer';
import HeaderComponent from '../../components/Header/HeaderContainer';

const bemClasses = getBEMClasses('main-page')

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchLoans();
  }

  render() {
    return (
      <div className={bemClasses()}>
        <HeaderComponent />
        <header className={bemClasses('header')} >
          Your Loans
        </header>
        <div>
          <LoanListContainer />
        </div>
      </div>
    );
  }
};

export default withAuthentication(MainPage);