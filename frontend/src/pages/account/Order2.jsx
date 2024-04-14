import React from 'react'
import { Table } from 'react-bootstrap'

const Order2 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className='dashboard'>
            <h4 className="order-add">Orders</h4>
            <hr/>
            <Table responsive bordered>
              <thead>
                <tr className='das-font-2'>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='das-font-3'>
                  <td>1</td>
                  <td>Aug 22, 2022</td>
                  <td>Pending</td>
                  <td>$3000</td>
                  <td>View</td>
                </tr>
                <tr className='das-font-3'>
                  <td>2</td>
                  <td>Aug 23, 2023</td>
                  <td>Pending</td>
                  <td>$3000</td>
                  <td>View</td>
                </tr>
                <tr className='das-font-3'>
                  <td>3</td>
                  <td>Aug 24, 2024</td>
                  <td>Pending</td>
                  <td>$3000</td>
                  <td>View</td>
                </tr>
              </tbody>

            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order2