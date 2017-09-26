import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import SignupPage from './components/Pages/SignupPage'
import ForgotPasswordPage from './components/Pages/ForgotPasswordPage'
import ResetPasswordPage from './components/Pages/ResetPasswordPage'
import ConfirmationPage from './components/Pages/ConfirmationPage'
import DashboardPage from './components/Pages/DashboardPage'
import NewBookPage from './components/Pages/NewBookPage'
import UserRoute from './components/Routes/UserRoute'
import GuestRoute from './components/Routes/GuestRoute'
import TopNavigation from './components/Navigation/TopNavigation'

const App = ({ location, isAuthenticated }) => {
  return (
    <div className='ui container'>
      { isAuthenticated && <TopNavigation /> }
      <Route location={location} path='/' exact component={HomePage} />
      <Route location={location} path='/confirmation/:token' exact component={ConfirmationPage} />
      <GuestRoute location={location} path='/Login' exact component={LoginPage} />
      <GuestRoute location={location} path='/SignUp' exact component={SignupPage} />
      <GuestRoute location={location} path='/forgot_password' exact component={ForgotPasswordPage} />
      <GuestRoute location={location} path='/reset_password/:token' exact component={ResetPasswordPage} />
      <UserRoute location={location} path='/Dashboard' exact component={DashboardPage} />
      <UserRoute location={location} path='/Books/New' exact component={NewBookPage} />
    </div>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.user.email
  }
}

export default connect(mapStateToProps)(App);
