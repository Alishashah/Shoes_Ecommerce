import React from 'react'
import '../pages/shome/css/main.css'
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Imgwin from '../pages/images/checkout-card-3.png'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white ">
    <div className="row padd-3">
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className='mt-3'>
                <h1 className='shome text-white'>Shome</h1>
                <p className='link-3 w-75'>
                Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore
                </p>
                <div className='d-flex gap-2 icon-cl'>
                    <p><FaFacebook /></p>
                    <p><FaInstagram /></p>
                    <p><FaWhatsapp /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className='mt-3'>
              <h3 className='mb-4'>Services</h3>
              <p className='link-3'>Home monitoring</p>
              <p className='link-3'>Air Filters</p>
              <p className='link-3'>Professional installation</p>
              <p className='link-3'>Smart Buildings</p>
              <p className='link-3'>For contractors</p>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
            <div className='mt-3'>
                <h3 className='mb-4'>My Account</h3>
                <p><Link to='/myaccount ' className='link-3'>My Account</Link></p>
                <p><Link to='/contact' className='link-3'>Contact</Link></p>
                <p><Link to='/cartnew' className='link-3'>Shopping cart</Link></p>
                <p><Link to='/shop' className='link-3'>Shop</Link></p>
                <p><Link to='/login' className='link-3'>Services Login</Link></p>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className='mt-3'>
                <h3 className='mb-4'>Contact Info</h3>
                <p className='link-3'>Address: Your address goes here.</p>
                <p className='link-3'>Phone//fax: 0123456789</p>
                <p className='link-3'>Email: demo@example.com</p>
                <p className='link-3'>www.example.com</p>
            </div>
        </div>
    </div>
    {/* <hr/> */}
    <div className="row padd bg-color-new">
        <div className="col-sm-6">
            <center><h5>© 2021 Shome. Made with <FaHeart className='text-danger'/> by Codecarnival.</h5></center>
        </div>

        <div className="col-sm-6">
              <div className='text-end'>
                <Link to='/address'><img src={Imgwin} alt="" className='img-fluid w-25' /></Link>
              </div>
        </div>
    </div>
   </div>

  )
}

export default Footer