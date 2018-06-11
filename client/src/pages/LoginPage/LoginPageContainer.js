import { reduxForm } from 'redux-form';
import LoginPageComponent from './LoginPageComponent';
import { login } from '../../redux/auth/authActions';

const LoginPageContainer = reduxForm({
  form: 'login',
  onSubmit: (payload, dispatch) => { dispatch(login(payload)) }
})(LoginPageComponent);

export default LoginPageContainer;