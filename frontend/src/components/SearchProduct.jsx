import React, { useContext } from 'react'
import { SearchContext } from '../pages/context/SearchContext'
import '../pages/shome/css/main.css'
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { GiMultiDirections } from "react-icons/gi";
import { MdAcUnit } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";

const SearchProduct = () => {
  const navigate=useNavigate()

  const handleCardClick = async(item) => {
    navigate(`/singleproduct/${item}`);
  };
  const{searchkey}=useContext(SearchContext)
  return (
    <div>
         <div className="container mt-5">
          <div className="row">
            <center>{ searchkey?.result?.length<1 ? "No product found" : `found ${searchkey?.result?.length} Product` }
</center>
<br />
<br />
<br />
            { searchkey.result.map((item)=> <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card-1">
              <p className='discount'>-10%</p>
              <div className='img-wrapper-2'>
            <img src={item.image} className="img-fluid  inner-img-2 img-img"  />
            </div>
            <div className="card-body mar-2">
              <p className="card-title"><b>product name:{item.name}</b></p>
              <p className="card-text">Brand : {item.brand}</p>
              <p className="card-text">Description: {item.description}</p>
              <p className="card-text">Price : {item.price}$</p>
            </div>
            <a href="#" className="card-2"><FaHeart /></a>
            <a href="#" className="card-3" onClick={() => handleCardClick(item._id)}><FaEye /></a>
            <a href="#" className="card-4" ><MdAcUnit /></a>
            <a href="#" className="card-5" ><GiMultiDirections /></a>
          </div>
          </div>


              )}

            </div>
          </div>
      </div>
  )
}

export default SearchProduct