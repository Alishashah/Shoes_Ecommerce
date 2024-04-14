import React, { useContext, useEffect, useState } from 'react'
// import './login.css'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import toast from 'react-hot-toast';
import { AdminContext } from '../context/Admincontext';

const Productdata = () => {
  const{authadmin}=useContext(AdminContext)
  const token=authadmin?.admintoken
  const[categories,setCategories]=useState([])
  // console.log(token)
  const[data,setdata]=useState({
    name:"",
    description:"",
    price:"",
    brand:"",
    items_left:"",
    category:"",
    quantity:"",
    image:null
  })
  const getallcategory = async () => {
    const response = await axios.get("http://localhost:3010/getcategory");
    console.log(response)
    setCategories(response?.data?.alldata || []);
  };
  useEffect(()=>{
     getallcategory();
  },[])

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
    formdata.append("name",data.name)
    formdata.append("description",data.description)
    formdata.append("price",data.price)
    formdata.append("brand",data.brand)
    formdata.append("items_left",data.items_left)
    formdata.append("quantity",data.quantity)
    formdata.append("category",data.category)
    formdata.append("image",data.image)
   try {
    e.preventDefault()
    await axios.post("http://localhost:3010/createproduct",formdata,{
      headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization": `Bearer ${token}`,
      }
    })
    toast.success("Product create successfull")
    setdata({
      name:"",
      description:"",
      category:"",
      price:"",
      brand:"",
      items_left:"",
      quantity:"",
      image:null
    })
   } catch (error) {
    toast.error("Product not create successfull"),
    error
   }
  }

  return (
         <div className="container-fluid">

      <div className="row">
      <div className=''>
        <div className="col-sm-10 ">
          <Form  onSubmit={handlesubmit} >
            <center><hr className='w-100'/></center>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>*Product Name*</Form.Label>
        <Form.Control type="text"  size='lg' name='name' value={data.name} onChange={handlechange}/>
      </Form.Group>
      <Form.Select aria-label="Default select example" name="category" value={data.category} onChange={handlechange}>
  {categories.length > 0 ? (
    categories.map((cate) => (
      <option key={cate._id} value={cate._id}>
        {cate.categoryname}
      </option>
    ))
  ) : (
    <option value="">No categories available</option>
  )}
</Form.Select>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>* Product Image</Form.Label>
        <Form.Control type="file"  size='lg' name='image' onChange={handleImageChange}/>
      </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>*Description </Form.Label>
        <Form.Control type="text"  name='description' size='lg'  value={data.description} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
        <Form.Label>*Items_left Number*</Form.Label>
        <Form.Control type="Number"  name='items_left' size='lg' value={data.items_left} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
        <Form.Label>*Brand </Form.Label>
        <Form.Control type="text"   name='brand' size='lg' value={data.brand} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>*Price*</Form.Label>
        <Form.Control type="number"  name='price' size='lg' value={data.price} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput25">
        <Form.Label>*Quantity*</Form.Label>
        <Form.Control type="number"  name='quantity' size='lg' value={data.quantity} onChange={handlechange}/>
      </Form.Group>
            <center><Button className="btn btn-dark bt-con mb-3 " variant="dark" type="submit" >Create Product</Button></center>
          </Form>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Productdata