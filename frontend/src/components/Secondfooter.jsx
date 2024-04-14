import React from "react";
import "./accordian.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiBasketball } from "react-icons/ci";
import { FaCcMastercard } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
const AccordianFooter = () => {
  return (
    <>
    <div className="container-fluid fot text-center">
      <div className="container">
        <div className="row text-white ">
          <div className="col-12">
            <h1 >Shome</h1>
            <p

              className="ach"
            >
              Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod
              templ incididunt ut labore
            </p>

            <button className="btc">
              {" "}
              <Link className="act">
                <FaFacebook />
              </Link>
            </button>

            <button className="btc">
              <Link className="act">
                <CiBasketball />
              </Link>
            </button>
            <button className="btc">
              <Link className="act">
                <FaPinterestP />
              </Link>
            </button>
            <button className="btc">
              <Link className="act">
                <CiTwitter />
              </Link>
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="accordion accordion-flush mt-3" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                 Services
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                <ul className="moni my-4">
                    <li>
                      <Link className="filter">Home monitoring</Link>
                    </li>
                    <li>
                      <Link className="filter">Air Filters</Link>
                    </li>
                    <li>
                      <Link className="filter">Professional installation</Link>
                    </li>
                    <li>
                      <Link className="filter">Smart Buildings</Link>
                    </li>
                    <li>
                      <Link className="filter">For Contractors</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  My Account
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul className="moni">
                    <li>
                      <Link className="filter">My Account</Link>
                    </li>
                    <li>
                      <Link className="filter">Contact</Link>
                    </li>
                    <li>
                      <Link className="filter">Shopping Cart</Link>
                    </li>
                    <li>
                      <Link className="filter">Shop</Link>
                    </li>
                    <li>
                      <Link className="filter">Service Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Contact Info
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                <ul className="moni">
                    <li>
                      <Link className="filter">Address:Your Address Goes here</Link>
                    </li>
                    <li>
                      <Link className="filter">Phone//fax:012345678</Link>
                    </li>
                    <li>
                      <Link className="filter">Email:demo@gmail.com </Link>
                    </li>
                    <li>
                      <Link className="filter">www.examle.com</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="container-fluid" style={{ background: "#36393F" }}>
     <div className="container text-center">
       <div className="row text-white" style={{ padding: "20px" }}>
         <div className="col-lg-6">
           <p>2021 Shome.Made with 💓 by Codecarnival</p>
         </div>
         <div className="col-lg-6 cardd ">
           <Link>
             <FaCcMastercard style={{ fontSize: "30px" }} />
           </Link>
           <Link>
             <CiCreditCard1 style={{ fontSize: "30px" }} />
           </Link>
           <Link>
             <FaCcVisa style={{ fontSize: "30px" }} />
           </Link>
           <Link>
             <FaCcPaypal style={{ fontSize: "30px" }} />
           </Link>
         </div>
       </div>
     </div>
   </div>
   </>
  );
};

export default AccordianFooter;