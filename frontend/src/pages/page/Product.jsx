import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../shome/css/main.css'
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";

const Product = () => {
    const [data,setdata]=useState([])
    const [viewdata, setviewdata] = useState(null);
    const navigate=useNavigate()

    const handleCardClick = (item) => {
      setviewdata(item);
      navigate(`/shoesdata/${item._id}`);
    };
    useEffect(()=>{
        const fetchdata=async()=>{
         await axios.get("http://localhost:3010/shoesdata").then((res)=>{
            // console.log(res.data.data)
            setdata(res.data.data)
         }).catch((err)=>{
              console.log(err);
         })
        }
        fetchdata();
    },[])
    const shoesdata=data.map((item)=>{
        return(
            <div  key={item._id} className="card-1">
            <img src={item.image} class="card-img-top img-fluid img-bor" style={{height:"200px" , width:"100%"}} />
            <div className="card-body">
              <h5 className="card-title"> Category : {item.category}</h5>
              <p className="card-text">Brand : {item.brand}</p>
              <p className="card-text">Price : {item.price}$</p>
            </div>
            <a href="#" className="card-2" onClick={() => handleCardClick(item)}><FaEye /></a>
          </div>
        )
    })
  return (
   <div className="container mar-top-bottom">
         <center><h1>Grid List View</h1></center>
    <div className="row">
      <div className='featured'>
       {shoesdata}
       </div>
    </div>
   </div>
  )
}
export default Product