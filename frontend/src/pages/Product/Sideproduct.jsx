import React from "react";
import { Link, Outlet } from "react-router-dom";
import Productnav from "./Productnav";
import Multirange from "./Multirange";
import './Product.css'


const Sideproduct = () => {
  return (
    <div className="container">
      <div className="row flex-row-reverse justify-content-between">
        <div className="col-xl-9">
          <Productnav />
          <Outlet />
        </div>
        <div className="col-xl-3 side mt-5">
          <div className="topcat">
            <div>
              <h4 className="toph">Top Categories</h4>
            </div>
            <div>
              <ul className="topl">
                <li>
                  <Link className="topc">Shop(6)</Link>
                </li>
                <li>
                  <Link className="topc">Computer</Link>
                </li>
                <li>
                  <Link className="topc">Electronics</Link>
                </li>
                <li>
                  <Link className="topc">Frame Sunglasses</Link>
                </li>
                <li>
                  <Link className="topc">Furniture</Link>
                </li>
                <li>
                  <Link className="topc">Genuine Leather</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="topcat my-3">
            <div>
              <h6>Range</h6>
            </div>
            <div>
            <span>0</span><input type="range" class="form-range" id="customRange1"/><span>3500</span>
            <Multirange/>
            </div>
          </div> */}
          {/* <div className="topcat my-3">
            <div>
              <h6 className="toph "> Color</h6>
            </div>
            <div>
              <ul className="topl topco mt-2">
                <li className="topc1">
                </li>
                <li className="topc2">
                </li>
                <li className="topc3">
                </li>
                <li className="topc4">
                </li>
                <li className="topc5">
                </li>
                <li className="topc7">
                </li>
                <li className="topc8">
                </li>
                <li className="topc9">
                </li>
                <li className="topc10">
                </li>
                <li className="topc11">
                </li>
                <li className="topc12">
                </li>
                <li className="topc13">
                </li>
                <li className="topc14">
                </li>
              </ul>
            </div>
          </div> */}
          <div className="topcat my-3">
            <div>
              <h6 className="toph">Size</h6>
            </div>
            <div>
              <ul className="topl">
                <li>
                  <Link className="topc">S(6)</Link>
                </li>
                <li>
                  <Link className="topc">M4</Link>
                </li>
                <li>
                  <Link className="topc">L2</Link>
                </li>
                <li>
                  <Link className="topc">XL</Link>
                </li>
                <li>
                  <Link className="topc">XXL</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="topcat my-3">
            <div className="mt-3">
              <h4 className="toph">Brand</h4>
            </div>
            <div className="mt-3">
              <ul className="topl">
                <li>
                  <Link className="topc">ADIDAS</Link>
                </li>
                <li>
                  <Link className="topc">PUMA</Link>
                </li>
                <li>
                  <Link className="topc">COACH</Link>
                </li>
                <li>
                  <Link className="topc">REDTAPE</Link>
                </li>
                <li>
                  <Link className="topc">NIKE</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sideproduct;
