import React, { useContext } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiHeartStraightThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import './topnav.css'
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
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

      <div class="container-1 container">
        <div class="row bg-change">
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <div class="header-item ">
            <div class="menu-overlay"></div>
            <nav class="menu">
              <div class="mobile-menu-head">
                <div class="go-back"><i class="fa fa-angle-left"></i></div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
              </div>
              <ul class="menu-main">
                <li>
                  <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                </li>
                <li class="menu-item-has-children">
                  <Link to="/about" style={{textDecoration:"none"}}>About </Link>

                </li>
                <li class="menu-item-has-children">
                  <Link to="/" style={{textDecoration:"none"}}>Shop</Link>
                  <div class="sub-menu mega-menu ">
                    <div class="list-item">
                      <ul className='text-start'>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/sideproduct">Sideproduct</Link></li>
                      </ul>
                      </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <Link to="/blog" style={{textDecoration:"none"}}>Blog </Link>
                  <div class="sub-menu single-column-menu text-start">
                    <ul>
                      <li><Link to="/Blogdetails">single Post Layout</Link></li>
                      <li><Link to="/Blogsection">Grid Layout</Link></li>
                    </ul>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <Link style={{textDecoration:"none"}}>Pages  </Link>
                  <div class="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Register</Link></li>
                      <li><Link to="/sideproduct">Product</Link></li>
                      <li><Link to='/compare'>Compare</Link></li>
                      <li><Link to="/pagenotfound">404 Page</Link></li>
                      <li><Link to='/account'>Account</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link style={{textDecoration:"none"}} to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          </div>
          </div>
      </div>

        </Offcanvas.Body>
      </Offcanvas></p>
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