import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GiGothicCross } from "react-icons/gi";
import { Cartcontext } from "../context/Cartcontext";
import { Apicontext } from "../context/Apicontext";

const Productlist = () => {
  const{handlecart,cartdata}=useContext(Cartcontext)
  // console.log(cartdata)
  const {data}=useContext(Apicontext)
  const [viewdata, setviewdata] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    setviewdata(item);
    navigate(`/shoesdata/${item._id}`);
  };

  const shoesdata = data
    .filter((item, ind) => ind <= 11)
    .map((item,ind) => {
      return (
        <>
          <div className="col-10 shadow-lg mb-3 colt ">
            <div className="row">
              <div key={ind} className=" card-1 col-lg-4 col-md-6 my-4">
                <img
                  src={item.image}
                  class=" img-fluid "
                  style={{ height: "200px", width: "100%" }}
                />

                <a
                  href="#"
                  className="card-2"
                  onClick={() => handleCardClick(item)}
                >
                  <FaEye />
                </a>
                <a
                  href="#"
                  className="card-3"
                  onClick={() => handleCardClick(item)}
                >
                  <FaShoppingCart />
                </a>
                <a
                  href="#"
                  className="card-4"
                >
                  <FaShuffle />
                </a>
                <a
                  href="#"
                  className="card-5"
                  onClick={() => handleCardClick(item)}
                >
                  <GiGothicCross />
                </a>
              </div>

              <div className=" ms-auto cdp col-lg-7 col-md-6 my-4">
                <h6>Mens/Women</h6>
                <h4>Leather Mens Slipper</h4>
                <h1>${item.price}</h1>
                <h6 className="adi">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem quo, rerum rem soluta quisquam, repellat is
                  deleniti omnis culpa ea quis provident dolore esse, offici
                  modi dolorem nam cum eligendi enim!
                </h6>
                <button className="list" onClick={()=>{handlecart(item)

                }}>Add to Cart</button>

              </div>
            </div>
          </div>
        </>
      );
    });

  return (
    <div className="container mar-top-bottom">
      <div className="row">{shoesdata}</div>
    </div>
  );
};
export default Productlist;
