import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function redirectIfAuthorized(WrappedComponent) {
  const ModifiedComponent = props => {
    const { shouldRedirect, redirectLocation, isAuthenticated } = props;

    if (isAuthenticated) {
      if (shouldRedirect) {
        return (
          <Redirect
            to={{
              pathname: redirectLocation.pathname,
              search: redirectLocation.search
            }}
          />
        );
      } else {
        return <Redirect to="/" />; //config.default?
      }
    }

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    shouldRedirect: state.auth.shouldRedirect,
    redirectLocation: state.auth.location
  });

  return connect(mapStateToProps, null)(ModifiedComponent);
}

export default redirectIfAuthorized;
