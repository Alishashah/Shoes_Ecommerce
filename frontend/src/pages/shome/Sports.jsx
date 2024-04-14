import React from 'react'
import Img5 from './img25.jpg'
import Img6 from '../images/img26.jpg'
import './css/main.css'

const Sports = () => {
  return (
<div className="container mar-top-bottom">
    <div className="row">
        <div className="col-sm-12 col-md-6 mt-4">
            <div className='p-4'>
            <div className='img-wrapper'>
                <img src={Img6} alt="" className='img-fluid inner-img' />
            </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 mt-4">
            <div className='p-4'>
                <div className='img-wrapper'>
                <img src={Img5} alt="" className='img-fluid inner-img' />
                </div>
                <h1 className='mt-4 font-dis-fea'>Sports Shoes</h1>
                <p className='font-dis-fea-2'>UP TO 30% OFF ALL SHOES & PRODUCTS</p>
                <button className='buttton-cl'>
                    Shop now
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
export default Sports