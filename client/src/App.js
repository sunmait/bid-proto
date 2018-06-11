import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

import LoginPage from './pages/LoginPageComponent';
import MainPage from './pages/MainPageComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">INDEX</Link>
          <Link to="/login">LOGIN</Link>
        </header>
        <Route path="/" component={MainPage} exact />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default withRouter(App);
