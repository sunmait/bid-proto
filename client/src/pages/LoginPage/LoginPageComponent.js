import React from 'react';
import { Form, Button } from 'semantic-ui-react';

import { getBEMClasses } from '../../helpers/cssHelper';
import './LoginPageComponent.css';
import { InputField } from '../../components/Fields';
import redirectIfAuthorized from '../../hocs/redirectIfAuthorized';

const bemClasses = getBEMClasses('login-form');

const LoginPage = props => {
  return (
    <div className={bemClasses('wrapper')}>
      <div className={bemClasses('container')} >
        <Form onSubmit={props.handleSubmit}>
          <InputField name="userName" label="User Name" />
          <InputField name="password" type="password" label="Password" />
          <Button fluid type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default redirectIfAuthorized(LoginPage);