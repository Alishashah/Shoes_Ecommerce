import React, { useContext,useState } from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GiGothicCross } from "react-icons/gi";
import { Apicontext } from '../context/Apicontext';

const ProductGrid = () => {
    const{data}=useContext(Apicontext)
    const navigate=useNavigate()

    const handleCardClick = (item) => {
      navigate(`/singleproduct/${item._id}`);
    };

    const shoesdata=data.filter((item,ind)=> ind<=10).map((item)=>{
        return(
          <div key={item._id} className="  card-1 col-lg-4 col-md-6">
          <div className='cary'>
        <img src={item.image} className="card-img-top img-fluid img-bor" /></div>
        <div className="card-body mt-3">
          {/* <p className="card-title"> <b>Category : {item?.category?.categoryname}</b></p> */}
          <p className="card-text">Brand : {item.brand}</p>
          <p className="card-text">Price : {item.price}$</p>
        </div>
        <a href="#" className="card-2" onClick={() => handleCardClick(item)}><FaEye /></a>
        <a href="#" className="card-3" onClick={() => handleCardClick(item)}><FaShoppingCart /></a>
        <a href="#" className="card-4" onClick={() => handleCardClick(item)}><FaShuffle /></a>
        <a href="#" className="card-5" onClick={() => handleCardClick(item)}><GiGothicCross /></a>

      </div>
        )
    })

  return (

   <div className="container mar-top-bottom">
    <div className="row">
       {shoesdata}
    </div>
   </div>

  )
}
export default ProductGrid