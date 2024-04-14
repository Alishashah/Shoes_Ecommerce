import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { GiMultiDirections } from 'react-icons/gi';
import { MdAcUnit } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { Apicontext } from '../context/Apicontext';

const Featured = () => {
  const { data } = useContext(Apicontext);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    navigate(`/singleproduct/${item}`);
  };

  const shoesdata = data?.map((item) => {
    const categoryname = item?.category?.categoryname;

    return (
      <div className="col-lg-3" key={item._id}>
        <div className="card-1">
          <p className="discount">-10%</p>
          <div className="img-wrapper-2">
            <img src={item.image} className="img-fluid inner-img-2 img-img" alt="" />
          </div>
          <div className="card-body mar-2">
            <h5 className="card-title">Category: {categoryname}</h5>
            <p className="card-text">Brand: {item.brand}</p>
            <p className="card-text">Price: {item.price}$</p>
          </div>
          <a href="#" className="card-2"><FaHeart /></a>
          <a href="#" className="card-3" onClick={() => handleCardClick(item._id)}><FaEye /></a>
          <a href="#" className="card-4"><MdAcUnit /></a>
          <a href="#" className="card-5"><GiMultiDirections /></a>
        </div>
      </div>
    );
  });

  return (
    <div className="container padd-3 mt-4">
      <center><h1 className='font-dis-fea'>Featured Items</h1></center>
      <center><p className='fo mb-3'>There are many variations of passages of Lorem Ipsum available</p></center>
      <div className="row">
        <div className='featured'>
          {shoesdata}
        </div>
        <Link to="/productlist">More products</Link>
      </div>
    </div>
  );
};

export default Featured;
