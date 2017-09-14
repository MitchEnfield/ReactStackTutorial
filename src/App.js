import React from 'react';
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import SignupPage from './components/Pages/SignupPage'
import ConfirmationPage from './components/Pages/ConfirmationPage'
import DashboardPage from './components/Pages/DashboardPage'
import UserRoute from './components/Routes/UserRoute'
import GuestRoute from './components/Routes/GuestRoute'

const App = ({location}) => {
  return (
    <div className='ui container'>
      <Route location={location} path='/' exact component={HomePage} />
      <Route location={location} path='/confirmation/:token' exact component={ConfirmationPage} />
      <GuestRoute location={location} path='/Login' exact component={LoginPage} />
      <GuestRoute location={location} path='/SignUp' exact component={SignupPage} />
      <UserRoute location={location} path='/Dashboard' exact component={DashboardPage} />
    </div>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
}

export default App;
