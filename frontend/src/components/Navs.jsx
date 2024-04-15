import React, { useContext } from 'react'
// import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiHeartStraightThin } from "react-icons/pi";
// import { IoMdClose } from "react-icons/io";
// import { MdArrowForwardIos } from "react-icons/md";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FaRegHeart } from "react-icons/fa";
// import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
// import { IoBagHandleOutline } from "react-icons/io5";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import Badge from "react-bootstrap/Badge";
// import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
// import { CartContext } from "../Context/CartContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
// import { FaDeleteLeft } from "react-icons/fa6";
// import { useSearch } from "../Context/Search";
import { GoSearch } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import './topnav.css'
import './sidetab.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { Cartcontext } from '../pages/context/Cartcontext';
import { SearchContext } from '../pages/context/SearchContext';
import axios from 'axios';
const Navs = () => {

 const{cartdata}=useContext(Cartcontext)
 const{searchkey,setsearchkey}=useContext(SearchContext)
//  console.log(cartdata)
  const [show, setShow] = useState(false);
  const [heartshow, setheartShow] = useState(false);
  const [humshow, sethumShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleheartClose = () => setheartShow(false);
  const handleheartShow = () => setheartShow(true);
  const handlehumClose = () => sethumShow(false);
  const handlehumShow = () => sethumShow(true);
  const navigate=useNavigate()

  const handlesearch=async(e)=>{
    e.preventDefault();
    const searchdata= await axios.get(`http://localhost:3010/searchproduct/${searchkey.keyword}`)
    console.log(searchdata)
    setsearchkey({...searchkey,result:searchdata?.data?.productsearch})
  navigate("/searchproduct")
  }
  return (
  <>
  <div className="container-fluid sticky-top bg-body-tertiary">
    <div className="row padd-3">
      <div className="col-12">
        <div className='d-dis'>
          <div className='align-self-start'><Link to='/' className='shome'>Shome</Link></div>
          <div className='w-25 dis-none'>
          <Form onSubmit={handlesearch}>
          <InputGroup>
        <Form.Control
          placeholder="Search Product"
          value={searchkey.keyword}
          onChange={(e)=>setsearchkey({...searchkey, keyword:e.target.value})}
          onKeyUp={handlesearch}
        />
      <button className='btn-nav' type='submit'>
          <IoMdSearch/>
          </button>
      </InputGroup>
      </Form>

          </div>
          <div className='hum-dis'>
                <p>    <GoSearch className='opa-none' onClick={handleheartShow}/>
      <Offcanvas show={heartshow} onHide={handleheartClose} placement="top" className='dis-off'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>search box</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <InputGroup>
        <Form.Control
          placeholder="Search"
          style={{outline:"none"}}
        />
        <Button variant="outline-secondary" className='btn btn-danger text-white' id="button-addon2" >
        <CiSearch />
        </Button>
        </InputGroup>
        </Offcanvas.Body>
      </Offcanvas></p>
      <p><RxHamburgerMenu  className='opa-none' onClick={handlehumShow}/>
      <Offcanvas show={humshow} onHide={handlehumClose} placement="start" className='dis-off'>
        <Offcanvas.Header className="hov">
          <Offcanvas.Title   >
            <div>Menu</div>
          </Offcanvas.Title>
          <div
            onClick={() => {
              handlehumClose();
            }}

          >
            <span className="text-end">
              <IoIosArrowBack style={{ fontSize: "20px" }} />
            </span>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="offbody" style={{ padding: "0" }}>
          <div className="itemin">
            <ul>
              <li className="contact">
                <Link>
                  <FaPhoneAlt className="offi" />
                  +00 123 456 789
                </Link>
              </li>
              <li className="email">
                <Link>
                  <IoMail className="offi" />
                  demo@gmail.com
                </Link>
              </li>

              <li>
                <Link to="/account">
                  <IoPersonSharp className="offi" />
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    className="accordion-button collapsed hote"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "white" }}
                    className="accordion-button collapsed hote"
                    aria-expanded="false"
                  >
                    About
                  </Link>
                </h2>
              </div>

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
                    Pages
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul className="moni">
                      <li>
                        <Link to="/account" className="filter">
                          Account
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" className="filter">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/signup" className="filter">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item ">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsemetoo"
                    aria-expanded="false"
                    aria-controls="flush-collapsemetoo"
                  >
                    Shop
                  </button>
                </h2>
                <div
                  id="flush-collapsemetoo"
                  className="accordion-collapse collapse accordian-flush "
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            Shop Layout
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body">
                            <ul className="moni">
                              <li>
                                <Link to="/productlist" className="filter">
                                  Product Page
                                </Link>
                              </li>
                              <li>
                                <Link to="/productlist/list" className="filter">
                                  Productlist
                                </Link>
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
                            data-bs-target="#panelsStayOpen-collapsemetoo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapsemetoo"
                          >
                            Single Product
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapsemetoo"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body">
                            <ul className="moni">
                              <li>
                                <Link to="/account" className="filter">
                                  Single Product Normal
                                </Link>
                              </li>
                              <li>
                                <Link to="/login" className="filter">
                                  Single Product Normal
                                </Link>
                              </li>
                              <li>
                                <Link to="/register" className="filter">
                                  Single Product Normal
                                </Link>
                              </li>
                              <li>
                                <Link to="/pagenotfound" className="filter">
                                  Single Product Normal
                                </Link>
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
                            data-bs-target="#panelsStayOpen-collapsepage"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapsepage"
                          >
                            Other pages
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapsepage"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body">
                            <ul className="moni">
                              <li>
                                <Link to="/cartnew" className="filter">
                                  Shopping Cart
                                </Link>
                              </li>
                              <li>
                                <Link to="/checkout" className="filter">
                                  Checkout
                                </Link>
                              </li>
                              <li>
                                <Link to="/wishlist" className="filter">
                                  Wishlist
                                </Link>
                              </li>
                              <li>
                                <Link to="/compare" className="filter">
                                  Compare
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseblog"
                    aria-expanded="false"
                    aria-controls="flush-collapseblog"
                  >
                    Blog
                  </button>
                </h2>
                <div
                  id="flush-collapseblog"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul className="moni">
                      <li>
                        <Link to="/singleblog" className="filter">Single Blog</Link>
                      </li>
                      <li>
                        <Link to="/blog"  className="filter">Grid Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "white" }}
                    className="accordion-button collapsed hote"
                    aria-expanded="false"
                  >
                    Contact
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

       </p>
            <p><Link to='/wishlist' className='wish'><PiHeartStraightThin /></Link></p>
          <p onClick={handleShow} className=''>
          <LiaShoppingBagSolid className='wish big-shop'>
          </LiaShoppingBagSolid>
          {/* <Badge className='badge-new'>+0</Badge> */}
      </p>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header  className="off">
          <Offcanvas.Title  className="cart container">
              <div>Shopping Cart</div>
            </Offcanvas.Title>
            <span className="text-end" onClick={()=>{handleClose()}}><MdArrowForwardIos /></span>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="container">
                   {
                    cartdata.map((e)=>{
                      return (
                        <div className="row py-3" key={e._id}>
                        <div className="col-4"><img src={e.image} alt="..." className="img-fluid"></img></div>
                        <div className="col-6"><Link className='link-cart-2' >{e.category}</Link><br/>${e.price}</div>
                        <div className="col-2"><IoMdClose /></div>
                      </div>
                      )
                    })
                   }
                    <div className="row">
                        <div className="col-6 fs-4">Subtotal</div>
                        <div className="col-6 fs-4 text-end">$89.9</div>
                    </div>

                    <div className="row my-5 text-center">
                        <div className="col-12 my-3 check"><button onClick={()=>{handleClose()}} className='btn-cart'><Link to="/cartnew" className='link-cart'>VIEW CART</Link></button></div>
                        <div className="col-12 check"><button className='btn-cart'><Link to="/checkout" className='link-cart' >CHECKOUT</Link></button></div>
                    </div>
              </div>

         </Offcanvas.Body>
      </Offcanvas>

          </div>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}

export default Navs