import React, { useContext } from "react";
import "./account.css";
import { LoginContext } from "../context/Loginapi";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const {auth,handlelogout}=useContext(LoginContext)

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-sm-12">
          <div className="dashboard">
            { auth?.user ?  <><img src={auth?.user?.image} alt="" className="img-fluid alimehn mb-3" />
             <p className="das-font">
             Hello,<span className="text-danger">{auth?.user?.name}</span>( If not{" "}
             <span className="text-danger">{auth?.user?.name} <Link onClick={handlelogout}>!logout</Link>)and your email is {auth?.user?.email}</span>
           </p> </>: null}
            <p className="das-font">
              From your account dashboard. you can easily check & view your
              recent orders, manage your shipping and billing addresses and edit
              your password and account details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
