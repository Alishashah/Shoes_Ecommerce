import React, { useContext } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react'
import axios from 'axios'
import "../shome/css/main.css"
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { GiMultiDirections } from "react-icons/gi";
import { MdAcUnit } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import ButtonGroup from '../shome/Buttongroup';
import { Apicontext } from '../context/Apicontext';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Related = () => {

  const{data}=useContext(Apicontext)
  const [viewdata, setviewdata] = useState(null);
    const navigate=useNavigate()

    const handleCardClick = (item) => {
      setviewdata(item);
      navigate(`/singleproduct/${item._id}`);
    };


  const shoesdata=data.map((item)=>{
    return(
        <div  key={item._id} className='card-1 m-3'>
          <div className='img-wrapper-2'>
        <img src={item.image} class="img-fluid inner-img-2 img-img"/>
        </div>
        <div className="card-body mar-2">
          <h5 className="card-title">category:{item.category}</h5>
          <p className="card-text">price:{item.price}</p>
        </div>
        <a href="#" className="card-2" onClick={() => handleCardClick(item)}><FaHeart /></a>
            <a href="#" className="card-3" onClick={() => handleCardClick(item)}><FaEye /></a>
            <a href="#" className="card-4" onClick={() => handleCardClick(item)}><MdAcUnit /></a>
            <a href="#" className="card-5" onClick={() => handleCardClick(item)}><GiMultiDirections /></a>
      </div>
    )
})
  return (
   <div className="container mar-top-bottom padd">
   <center><h1 className='font-dis-fea'>Related Items</h1></center>
    <center><p className='font-dis-fea-2'>There are many variations of passages of Lorem Ipsum available</p></center>
    <div className="row">
    <Carousel responsive={responsive}
    swipeable={true}
    draggable={true}
    arrows={false}
    infinite={true}
    autoPlaySpeed={1000}
    renderButtonGroupOutside={true}
    customButtonGroup={<ButtonGroup/>}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    >
  {shoesdata}
    </Carousel>
    </div>
   </div>
  )
}

export default Related
