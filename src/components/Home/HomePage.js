import React from 'react'
import { Link } from 'react-router-dom'
import "./homepage.css"
const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='innerhomepage'> 
        <div>
            <h1>Product Managment System</h1>
            <p>Product management system</p>
        </div>
        <div>
            <Link to='/admin' className='homeloginbutton'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage