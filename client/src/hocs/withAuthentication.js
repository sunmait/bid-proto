import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { redirectFromLogin } from '../redux/auth/authActions';

function withAuthentication(WrappedComponent) {
  const ModifiedComponent = props => {
    const { isAuthenticated, location, redirectFromLogin, pendingAuth } = props;

    if (pendingAuth) {
      return null;
    }

    if (!isAuthenticated) {
      redirectFromLogin(location);
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    pendingAuth: state.auth.pending
  });

  const mapDispatchToProps = {
    redirectFromLogin
  }

  return connect(mapStateToProps, mapDispatchToProps)(ModifiedComponent);
}

export default withAuthentication;
