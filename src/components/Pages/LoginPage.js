import React from 'react';
import LoginForm from '../Forms/LoginForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {

  submit = (data) => this.props.login(data).then(() => this.props.history.push('/Dashboard'));

  render(){
    return (
      <div>
        <h1>Login Page</h1>

        <LoginForm submit={this.submit} />
      </div>
    )
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
}

export default connect(null, { login })(LoginPage);
