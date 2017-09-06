import React from 'react';
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import DashboardPage from './components/Pages/DashboardPage'
import UserRoute from './components/Routes/UserRoute'
import GuestRoute from './components/Routes/GuestRoute'

const App = ({location}) => {
  return (
    <div className='ui container'>
      <Route location={location} path='/' exact component={HomePage} />
      <GuestRoute location={location} path='/Login' exact component={LoginPage} />
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
