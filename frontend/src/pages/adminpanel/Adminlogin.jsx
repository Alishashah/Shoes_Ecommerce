import React, { useContext, useState } from "react";
import '../auth/login.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link} from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
import{useNavigate}from 'react-router-dom'
import { AdminContext } from "../context/Admincontext";


const Adminlogin = () => {
    const{authadmin,setauthadmin}=useContext(AdminContext)
  const navigate= useNavigate()
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
   const res=await axios.post("http://localhost:3010/adminlogin",data)
   console.log(res)
   setdata({
    email:"",
    password:""
   })
   setauthadmin({
    ...authadmin,
    admin:res?.data?.admin,
    admintoken:res?.data?.admintoken
   })
   localStorage.setItem("admintoken",JSON.stringify(res.data))
            toast.success("login successfull")
            navigate("/adminpanel")
    } catch (error) {
     toast.error("login unsuccessfull")
     navigate("/loginadmin")
    }


  };
  return (
    <div className="container-fluid">
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

export default Adminlogin;
