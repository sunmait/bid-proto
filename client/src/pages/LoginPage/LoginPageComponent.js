import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

import { getBEMClasses } from '../../helpers/cssHelper';
import './LoginPageComponent.css';
import { InputField } from '../../components/Fields';
import redirectIfAuthorized from '../../hocs/redirectIfAuthorized';
import { required } from '../../helpers/formValidators';

const bemClasses = getBEMClasses('login-form');

const LoginPage = props => {
  return (
    <div className={bemClasses()}>
      <div className={bemClasses('container')} >
        <header className={bemClasses('header')}>
          LOG IN
        </header>
        <Form onSubmit={props.handleSubmit}>
          <Message
            error
            visible={props.submitFailed}
            content={props.error}
          />
          <InputField name="userName" label="User Name" validate={[required]} required />
          <InputField name="password" type="password" label="Password" validate={[required]} required />
          <Button fluid type='submit' color="blue">LOGIN</Button>
        </Form>
      </div>
    </div>
  );
}

export default redirectIfAuthorized(LoginPage);