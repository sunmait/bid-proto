import React from 'react';
import withAuthentication from '../hocs/withAuthentication';

const HomePage = props => {
  return (
    <div>HOME PAGE</div>
  );
};

export default withAuthentication(HomePage);