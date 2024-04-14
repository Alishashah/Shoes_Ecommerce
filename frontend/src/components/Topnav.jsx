import React, { useContext } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import "./topnav.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../pages/context/Loginapi";

const Topnav = () => {

const{auth ,handlelogout}=useContext(LoginContext)

  return (
    <div className="container-fluid bg-1">
      <div className="row sec">
        <div className="col-lg-6 text-center">
          <div className="d-flex justify-content-center align-items-center">
            <p className="font-1">
              World Wide Completely Free Returns and Free Shipping
            </p>
          </div>
        </div>
        {
          auth?.user ? ( <div className="col-lg-6 dis-blank">
          <div className="dis">

            <div className="bor">
              <p>
                <IoCall className="color-1" />
              </p>
              <p className="font-color">{auth?.user?.phone}</p>
            </div>
            <div className="bor">
              <p>
                <MdEmail className="color-1" />
              </p>
              <p className="font-color"> {auth?.user?.email}</p>
            </div>
            <div className="bor">
              <Link to="/account">
              <img src={auth?.user?.image}  className=" img-fluid alimeh" alt="" />
              </Link>
              <Link to="/account" className="text-black">

                <p className="font-color">
                 {auth?.user?.name}
                </p>
              </Link>
              <Link className="font-color" onClick={handlelogout} >logout</Link>
            </div>
          </div>
        </div>):(
          <div className="col-lg-6  text-end">
              <Link to="/signup " className="font-color">Signup </Link>
              <Link to="/login" className="font-color "> login</Link>
            </div>
        )
        }

      </div>
    </div>
  );
};

export default Topnav;
