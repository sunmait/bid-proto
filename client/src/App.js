import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './pages/LoginPage/LoginPageContainer';
import MainPage from './pages/MainPage/MainPageContainer';
import WinnersPage from './pages/WinnersPage/WinnersPageContainer';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { checkAuthToken } from './redux/auth/authActions';

class App extends Component {
  componentDidMount() {
    this.props.checkAuthToken();
  }
  render() {
    return (
      <div className="App">
        <Route path="/" component={MainPage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/winners/:id" component={WinnersPage} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  checkAuthToken: checkAuthToken
}

export default withRouter(connect(null, mapDispatchToProps)(App));
