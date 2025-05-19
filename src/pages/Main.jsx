import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
  <>
    <div className='container'>This is the home page</div>
    <Link to="login">login</Link>
      <Link to="register">Register</Link>
  
  </>
  )
}

export default Main