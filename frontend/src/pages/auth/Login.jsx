import React, { useContext, useState } from "react";
import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link} from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/Loginapi";
import toast from 'react-hot-toast';
import{useNavigate}from 'react-router-dom'


const Login = () => {
  const navigate= useNavigate()
  const{auth,setauth}=useContext(LoginContext)

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
   const res=await axios.post("http://localhost:3010/login",data)
   setdata({
    email:"",
    password:""
   })
   setauth({
    ...auth,
    user:res.data.user,
    jwttoken:res.data.jwttoken
   })
   localStorage.setItem("token", JSON.stringify(res.data))
            toast.success("login successfull")
    } catch (error) {
     toast.error("login unsuccessfull")
    }
    navigate("/")

  };
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <div className="bg-dark d-flex justify-content-center align-items-center padd-8">
          <h1 className="text-white">Login</h1>
        </div>
      </div> */}
      <div className="row">
        <div className="hr-w  mar-new">
          <div className="col-sm-6 shadow-1">
            <Form className="padd-8" onSubmit={handlesubmit}>
              <center>
                <h1>Login</h1>

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
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handlechange}
                />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label className="in-size">Password*</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  value={data.password}
                  onChange={handlechange}
                />
              </Form.Group>
              {/* <div className="forgot mt-2">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                  <p
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Remember me
                  </p>
                </div> */}


              <center>
                <Button className="btn bt-con " variant="dark" type="submit">
                  Login
                </Button>
              </center>
              <center>
                <hr />
              </center>
       <div className=" d-flex justify-content-between flex-wrap mt-4">
       <div>
                  <Link to='/forgot' className=" text-black mb-4" >Forgot Password ? </Link>
                </div>
                <div>
                  don't have an account
                  <Link to="/signup">
                    <span className="text-danger mt-5">-get started</span>
                  </Link>
                  </div>
       </div>




            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
