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
      { isAuthenticated ? (
        <Button secondary onClick={ () => logout() }>Logout</Button>
      ) : (
        <div>
          <Link to='/Login'>Login</Link> or <Link to='/Signup'>Sign Up</Link>
        </div>
      ) }
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
