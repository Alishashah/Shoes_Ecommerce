import React, { useState } from 'react'
import './login.css'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import{useNavigate}from 'react-router-dom'
const Sign = () => {
 const navigate= useNavigate()
  const[data,setdata]=useState({
    username:"",
    email:"",
    password:"",
    secretkey:"",
    phone:"",
    image:null
  })

  // image data
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setdata((prevData) => ({
      ...prevData,
      image: file,
    }));
    console.log(file)
  };

  const handlechange=(e)=>{
    const{name,value}=e.target
    setdata({...data,[name]:value})
  }
  const handlesubmit=async (e)=>{
    const formdata=new FormData()
    formdata.append("username",data.username)
    formdata.append("email",data.email)
    formdata.append("password",data.password)
    formdata.append("secretkey",data.secretkey)
    formdata.append("phone",data.phone)
    formdata.append("image",data.image)
   try {
    e.preventDefault()
    await axios.post("http://localhost:3010/signup",formdata,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })

    console.log(formdata)

    toast.success("Registration successfull")
    setdata({
      username:"",
      email:"",
      password:"",
      secretkey:"",
      phone:"",
      image:""
    })
    navigate("/login")
   } catch (error) {
    toast.error("Registration unsuccessfull"),
    error
   }
  }

  return (
         <div className="container-fluid">
          {/* <div className="row">
        <div className='bg-dark d-flex justify-content-center align-items-center padd'>
          <h1 className='text-white'>REGISTER</h1>
        </div>
      </div> */}
      <div className="row">
      <div className='hr-w  mar-new-1'>
        <div className="col-sm-6 shadow-1">
          <Form className='padd-8' onSubmit={handlesubmit} >
            <center><h2 className='mb-3'>Registration Form</h2></center>
            <center><hr className='w-100'/></center>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label  className='in-size'>Username*</Form.Label>
        <Form.Control type="text"   name='username' value={data.username} onChange={handlechange}/>
      </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label className='in-size'>Image*</Form.Label>
        <Form.Control type="file"   name='image' onChange={handleImageChange}/>
      </Form.Group>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput3">
        <Form.Label className='in-size'>Email address*</Form.Label>
        <Form.Control type="email"  name='email'  value={data.email} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput5">
        <Form.Label className='in-size'>Phone Number*</Form.Label>
        <Form.Control type="text"  name='phone'  value={data.phone} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput6">
        <Form.Label className='in-size'>*Secretkey (In case you forgot your password)</Form.Label>
        <Form.Control type="text"   name='secretkey' value={data.secretkey} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
        <Form.Label className='in-size'>Password*</Form.Label>
        <Form.Control type="password"  name='password' value={data.password} onChange={handlechange}/>
      </Form.Group>
            <center><Button className="btn btn-dark bt-con " variant="dark" type="submit" >Register</Button></center>
            <center><hr/></center>
            <center><p>Already have an account<Link to='/login'><span className="text-danger">-login</span></Link></p></center>
          </Form>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Sign