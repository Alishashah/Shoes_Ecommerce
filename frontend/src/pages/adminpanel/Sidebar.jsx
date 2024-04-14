import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
     <div className="dashboard">
              <Link to="dashboard">dashboard</Link>
     </div>
     <div className="userdata">
       <Link to="">User</Link>
     </div>
     <div className="product">
       <Link to="product">Product</Link>
     </div>
     <div className="category">
       <Link to="category">Category</Link>
     </div>
     <div className="blog">
       <Link to="blogadmin">Blog</Link>
     </div>
    </div>
  )
}

export default Sidebar