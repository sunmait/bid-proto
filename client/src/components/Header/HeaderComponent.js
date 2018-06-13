import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getBEMClasses } from '../../helpers/cssHelper';
import './HeaderComponent.css';
import { Button } from 'semantic-ui-react';

const bemClasses = getBEMClasses('header');

const Header = (props, context) => {
  const { history } = context.router;
  return (
    <div className={bemClasses()} >
      <div className={bemClasses('username')} >Hello, {props.username}</div>
      <Button onClick={() => history.push('/')}>Home</Button>
      <Button onClick={props.logout}>Log out</Button>
    </div>
  )
}

Header.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  }).isRequired
};

export default withRouter(Header);