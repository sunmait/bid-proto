import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import { logout } from '../../redux/auth/authActions';

const mapStateToProps = state => ({
  username: state.auth.username
});

const mapDispatchToProps = {
  logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);