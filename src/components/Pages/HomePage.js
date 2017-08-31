import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = (props) => {
  return (
    <div>
      <Link to='/login'><h1>Home Page</h1></Link>
    </div>
  )
}

export default HomePage
