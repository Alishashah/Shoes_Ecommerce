import React from 'react'
import { Table } from 'react-bootstrap'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Download = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className='dashboard'>
            <h4 className="order-add">Download</h4>
            <hr/>
            <Table responsive bordered>
              <thead>
                <tr className='das-font-2'>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Expire</th>
                  <th>Download</th>

                </tr>
              </thead>
              <tbody>
                <tr className='das-font-3'>
                  <td>HasTech - Profolio Business Template</td>
                  <td>Aug 24, 2024</td>
                  <td>Yes</td>
                  <td><p> <FaCloudDownloadAlt /> Download File</p></td>
                </tr>
                <tr className='das-font-3'>
                  <td>Haven - Free Real Estate PSD Template</td>
                  <td>Aug 23, 2023</td>
                  <td>Yes</td>
                  <td><p> <FaCloudDownloadAlt /> Download File</p></td>
                </tr>
                <tr className='das-font-3'>
                  <td>Haven - Free Real Estate PSD Template</td>
                  <td>Aug 24, 2024</td>
                  <td>Never</td>
                  <td><p> <FaCloudDownloadAlt /> Download File</p></td>
                </tr>
              </tbody>

            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download