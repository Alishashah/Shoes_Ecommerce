import React from 'react'
import Product from './Product'
import './product.css'
import '../shome/css/main.css'

const Pages = () => {
  return (
    <div className="container-fluid padd">
      <div className="row">
        <div className="col-lg-3">
          <div className='sha'>
            <h3>Top categories</h3>
            <p>Shoes</p>
            <p>Electronics</p>
            <p>Computer</p>
            <p>Jewellerry</p>
            <p>Clothes</p>
            <p>Watches</p>
            <p>Phones</p>
          </div>
          <div className='sha'>
           <h3>Filter Price</h3>
          </div>
          <div className='sha'>
           <h3>Colors</h3>
          </div>
          <div className='sha'>
           <h3>Size</h3>
           <p>s</p>
           <p>s</p>
           <p>s</p>
           <p>s</p>
          </div>
          <div className='sha'>
           <h3>Brand</h3>
           <p>nike</p>
           <p>nike</p>
           <p>nike</p>
           <p>nike</p>
           <p>nike</p>
           <hr/>
          </div>
        </div>
        <div className="col-lg-9">
          <div>
           <Product/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pages
