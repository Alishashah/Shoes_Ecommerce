import React, { useContext, useState } from "react";
import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Forgot = () => {

  const [data, setdata] = useState({
    email: "",
    secretkey:"",
    newpassword: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };



  const handlesubmit = async (e) => {
    try {
    e.preventDefault();
   await axios.post("http://localhost:3010/forgot",data)
   setdata({
    email:"",
    secretkey:"",
    newpassword:"",
   })
   toast.success("Password Reset")
   } catch (error) {
    // if(!email){
    //   toast.error(" please enter correct email")
    // }
    // if(!secretkey){
    //   toast.error(" please enter correct secretkey")
    // }
    // if(!newpassword){
    //   toast.error(" please enter correct newpassword")
    // }
   toast.error("password can't resend ")
   }
  };
  return (
    <div className="container-fluid">
      {/* <div className="row ">
        <div className="bg-dark d-flex justify-content-center align-items-center padd">
          <h3 className="text-white">Forgot Password</h3>
        </div>
      </div> */}
      <div className="row">
        <div className="hr-w  mar-new">
          <div className="col-sm-6 shadow-1">
            <Form className="padd-8" onSubmit={handlesubmit}>
              <center>
                <h3> Reset Password </h3>

              </center>
              <center>
                <hr className="w-75" />
              </center>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="in-size">email*</Form.Label>
                <Form.Control
                  type="email"

                  // size="lg"
                  name="email"
                  value={data.email}
                  onChange={handlechange}
                />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label className="in-size">Secretkey*</Form.Label>
                <Form.Control
                  type="text"

                  // size="lg"
                  name="secretkey"
                  value={data.secretkey}
                  onChange={handlechange}
                />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label className="in-size">New Password*</Form.Label>
                <Form.Control
                  type="password"
                  
                  name="newpassword"
                  value={data.newpassword}
                  onChange={handlechange}
                />
              </Form.Group>
              <center>
                <Button className="btn bt-con " variant="dark" type="submit">
                  Reset password
                </Button>
              </center>
              <Link to='/login' className="text-black mt-5 text-lg-end"> Back to login page</Link>

            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
