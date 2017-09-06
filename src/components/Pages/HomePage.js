import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import { Button } from 'semantic-ui-react';

const HomePage = ({ isAuthenticated, logout }) => {
  return (
    <div>
      <h1>Home Page</h1>
      { isAuthenticated ? <Button secondary onClick={ () => logout() }>Logout</Button> : <Link to='/Login'><Button primary>Login</Button></Link> }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    isAuthenticated: !!state.user.token
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout: actions.logout })(HomePage)
