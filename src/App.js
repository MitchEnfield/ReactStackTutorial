import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'

const App = (props) => {
  return (
    <div className='ui container'>
      <Route path='/' exact component={HomePage} />
      <Route path='/login' exact component={LoginPage} />
    </div>
  )
}

export default App;
