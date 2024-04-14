import React from 'react'
import Img4 from '../images/img15.jpg'
import './css/main.css'

const Saving = () => {
  return (
 <div className="container-fluid mar-top-bottom bg-body-secondary">
    <div className="row p-2">
    <div className=" col-lg-6 col-md-12 col-sm-12 dis-save">

            <div>
            <h1 className='font-dis-fea' data-aos="zoom-in">Saving 50%</h1>
            <h1 className='font-dis-2'>All Online Store</h1>
            <p className='font-dis-fea-2'>OFFER AVAILABLE ALL SHOES & PRODUCTS</p>
            <button className='buttton-cl'> Shop now</button>
        </div>

    </div>
    <div className="col-lg-6 col-md-12 col-sm-12">
        <div className='bor-main'>
            <h1 className='dis-bor'>NEW</h1>
            <img src={Img4} alt="" className='img-fluid clip-img'/>
        </div>
    </div>
    </div>
 </div>
  )
}

export default Saving