import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Adminpanel = () => {
  return (
    <div className='d-flex'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Adminpanel