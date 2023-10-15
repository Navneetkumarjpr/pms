import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./admin.css"
// import { } from '@fortawesome/free-brands-svg-icons'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Dashboard from '../dashboard/Dashboard';
const Admin = () => {
  return (
    <div className='adminpage'>
        <Menu/>
        <div className='dashadminpage'>
         <Outlet/>
        </div>
    </div>
  )
}

export default Admin