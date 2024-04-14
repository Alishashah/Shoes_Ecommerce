import React from 'react'
import { FaEdit } from "react-icons/fa";

const Address = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12">
                <div className='dashboard'>
                    <h4>Billing Address</h4>
                    <hr/>
                    <h5>Alex Tuntuni</h5>
                    <p className='das-font'>1355 Market St, Suite 900</p>
                    <p className='das-font'>San Francisco, CA 94103</p>
                    <p className='das-font'>Mobile: (123) 456-7890</p>

                    <p className='text-danger'> <FaEdit className='text-danger'/> Edit address</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Address