import React from 'react'
import './order.css'
import { Link } from 'react-router-dom'
// import order from './order.png'

const Order = () => {
  return (
    <div className=' container-fluid order-1'>
        <div>
                   {/* <img src={order} alt="" className='img-fluid order-img'  /> */}
            <h2 className='h-7'>Your order was successfull</h2>
            <h1 className='p-1'>Thanks for your Purchase</h1>
            <p>your order number is #8273467389203487</p>
            <p>you'll receive an email confirming your order</p>
            <button className='bt-order'>Track your order</button>
           <Link to='/'> <p className='h-1 mt-4'>Back to home</p></Link>
        </div>
    </div>
  )
}

export default Order