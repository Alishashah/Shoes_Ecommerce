import React from 'react'
import Img1 from '../images/img30.jpg'
import Img2 from '../images/img29.jpg'
import Img3 from '../images/img28.jpg'
import './css/main.css'

const Imagesec = () => {
  return (
    <div className="container mar-1">
        <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className='pos img-wrapper mt-3'>
                    <p className='abs'>Sports Shoes</p>
                    <img src={Img1} alt="" className='img-fluid inner-img' />
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className='pos  img-wrapper mt-3'>
                <p className='abs'> Latest Shoes</p>
                    <img src={Img2} alt="" className='img-fluid inner-img' />
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className='pos img-wrapper mt-3'>
            <p className='abs'> Office Shoes</p>
                    <img src={Img3} alt="" className='img-fluid inner-img' />
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className='pos img-wrapper mt-3'>
            <p className='abs'> Office Shoes</p>
                    <img src={Img3} alt="" className='img-fluid inner-img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Imagesec