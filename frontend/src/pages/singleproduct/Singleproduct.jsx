import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Bestseller from '../shome/Bestseller';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import ButtonGroup from "@mui/material/ButtonGroup";
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
const Singleproduct = () => {

    const{_id}=useParams();
    const [data,setdata]=useState([])
    const[view,setview]=useState(false)
    const [value, setValue] =useState(2);
    const[increasedata,setincreasedata]=useState(1)
    const [rotate, setrotate] = useState(null);
    const [dataim, setDataim] = useState("");

    const rotatestyle = {
      r1: "fa-rotate-270",
      r2: "fa-rotate-180",
      r3: "fa-rotate-360",
      r4: "fa-rotate-90",
    };
    const buttons = [
        <Button key="one" onClick={()=>{setincreasedata(increasedata-1)}}>-</Button>,
        <Button key="two">{increasedata}</Button>,
        <Button key="three" onClick={()=>{setincreasedata(increasedata+1)}}>+</Button>,
      ];

    // console.log(_id);

    const fetchdata=async()=>{
    await axios.get("http://localhost:3010/shoesdata").then((res)=>{
        // console.log(res.data.data)
        setdata(res.data.data)
    }).catch((err)=>{
  console.error(err);
    })
    }
 const product = data.filter((item)=>{return item._id===_id})
// console.log(product[0]);
 useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>{product.map((i)=>{return <div key={i._id}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div>
                                        <img src={i.image}alt=""  className='img-fluid' style={{width:"200px", height:"110px " , marginTop:"10px"}}/>
                                        <img src={i.image} alt=""  className='img-fluid' style={{width:"200px", height:"110px", marginTop:"10px"}}/>
                                        <img src={i.image} alt="" className='img-fluid' style={{width:"200px", height:"110px",marginTop:"10px"}} />
                                        <img src={i.image} alt=""  style={{width:"200px", height:"110px",marginTop:"10px"}}   className="img-fluid"
/>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div>
                                        <img src={i.image} alt="" className={`img-fluid ${rotate}`} style={{marginTop:"10px"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                          <div className='text-black'>
                            <h2>Product details</h2>
                            <p>Price: ${i.price}</p>
                            <p>Title: {i.slug}</p>
                            <p>Category: {i. category}</p>
                            <p> Brand : {i.brand}</p>
                            </div>
                            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
            <div><ButtonGroup
                      color="info"
                      aria-label="medium secondary button group">
                      {buttons}
                    </ButtonGroup></div>
      <div className='d-flex gap-2 mt-3'>
      <Link to='/cartnew'><Button variant="dark" className="bg-dark text-white">Add to Cart</Button></Link>
      <Link to='/address'><Button variant="dark" className="bg-dark text-white">Buy now</Button></Link>
      <p onClick={()=>{setview(!view)}}> {!view? <CiHeart />:<FaHeart className="text-danger"/> }</p>
        </div>
                        </div>
                    </div>
                </div>
    </div>})}
      <Bestseller/>
    </div>
  )
}

export default Singleproduct