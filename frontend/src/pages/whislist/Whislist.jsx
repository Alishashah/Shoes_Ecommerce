import React from 'react'
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import '../shome/css/main.css'
import Imgcart from '../images/img1.jpg'
import './wish.css'

const Whislist = () => {
  return (
    <>
    {/* <div className="container-fluid">
      <div className="row text-center">
        <div className="col-12">
          <div className="wisht py-5">
            <h1>Wishlist</h1>
            <h1 className='text-white'>Home //Wishlist</h1>
          </div>
        </div>
      </div>
    </div> */}
    <div className="container padd">
        <center><h1 className='font-dis-fea'> Wishlist</h1></center>
       <center> <p className='font-dis-fea-2'>explicabo nam alias fugiat provident cupiditate eaque</p></center>
    <Table responsive striped>
    <thead className='bg-dark'>
      <tr className='text-center  fs-5'>
        <th>Product</th>
        <th>Stock</th>
        <th>Price</th>
        <th>Cart</th>
      </tr>
    </thead>
    <tbody>
          <tr className='text-center align-middle '>
          <td>
              <div className='d-flex justify-content-evenly align-items-center'>
              <MdDelete className='text-danger' />
              <img src={Imgcart} alt="image"  style={{width:"60px",height:"60px"}}/>
              <p>category</p>
              </div>
          </td>
          <td className='align-middle'><div><p className='btn-stock'>stock</p></div></td>
          <td className='align-middle'>8765</td>
          <td className='align-middle'><p className='btn-add-to'>add to cart</p></td>
        </tr>
    </tbody>
  </Table>
  </div>
  </>
  )
}

export default Whislist