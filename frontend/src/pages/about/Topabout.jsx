import React from 'react'
import Img18 from '../images/img18.png'
import '../shome/css/main.css'
import { Link } from 'react-router-dom'
// import { Tilt } from 'react-tilt'
// import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

// const defaultOptions = {
// 	reverse:        true,  // reverse the tilt direction
// 	max:            35,     // max tilt rotation (degrees)
// 	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
// 	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
// 	speed:          1000,   // Speed of the enter/exit transition
// 	transition:     true,   // Set a transition on enter/exit.
// 	axis:           null,   // What axis should be disabled. Can be X or Y.
// 	reset:          true,    // If the tilt effect has to be reset on exit.
// 	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
// }

const Topabout = () => {
  return (
   <div className="container mar-top-bottom">
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
        <Tilt>
    <div className='d-flex justify-content-center align-items-center ' data-aos="zoom-in">
                <img src={Img18} alt="" className='img-fluid ' />
            </div>
    </Tilt>



        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
            <p className='font-dis-fea'>Smart Life</p>
            <h1 className='font-dis-fea'>With Smart Shoes</h1>
            <p className='font-lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minivel quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia.</p>
            <Link to='/contact'><button className='buttton-cl'>Contact us</button></Link>
            </div>

        </div>
    </div>
   </div>
  )
}

export default Topabout