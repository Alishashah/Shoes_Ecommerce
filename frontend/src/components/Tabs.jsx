import React from "react";
import './topnav.css'
import { Link } from "react-router-dom";
const Tabs = () => {
  return (
    <div className="container-fluid">
        <div className="container bg-change">
            <div className="row">
                <div className="col-12">
                    <div className="gapp-2">
                    <Link to='/' className="gapp">Home</Link>
                    <Link to='/about' className="gapp">About</Link>
                    <Link to='page' className="gapp">Page</Link>
                    <Link to='/account' className="gapp">Account</Link>
                    <Link to='/contact' className="gapp">Contact</Link>
                    <Link to='/blog' className="gapp">Blog</Link>
                </div>
                </div>
            </div>
            </div>
        </div>

  )
}

export default Tabs