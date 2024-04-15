import React, {useState ,useEffect,useContext} from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GiGothicCross } from "react-icons/gi";
import { Apicontext } from '../context/Apicontext';

const ProductGrid = () => {
    const{data,setCurrentPage,currentPage,totalPages}=useContext(Apicontext)
    const navigate=useNavigate()

    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };


    const handleCardClick = (item) => {
      navigate(`/singleproduct/${item._id}`);
    };

    const shoesdata=data.map((item)=>{
        return(

          <div key={item._id} className="  card-1 col-lg-4 col-md-6">
          <div className='cary'>
        <img src={item.image} className="card-img-top img-fluid img-bor" /></div>
        <div className="card-body mt-3">
          <p className="card-title"> <b>{item?.category?.categoryname}</b></p>
          <p className="card-text">Brand : {item.brand}</p>
          <p className="card-text">Price : ${item.price}</p>
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
    { data.length>0 ?   <div className=' mt-4'>
    <button onClick={handlePrevPage} disabled={currentPage === 1}>
⬅️
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
➡️
        </button>
   </div> : <h5 className='d-flex justify-content-center align-items-center'>sorry no product matches your requirement</h5>}

   </div>

  )
}
export default ProductGrid