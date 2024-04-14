import React from 'react'
import { Form } from 'react-bootstrap'

const Accountdetails = () => {
  return (
   <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <div className="dashboard">
        <Form className=''>
          <h4>Account details</h4>
          <hr/>
          <div className="row">
          <div className="col-lg-6">
          <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg"/>
                </Form.Group>
          </div>
          <div className="col-lg-6">
          <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg"/>
                </Form.Group>
          </div>
          </div>

          <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg" />
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg"/>
                </Form.Group>

                <div className='mt-5'>
                  <h5>Password Change</h5>
                  <hr/>
                  <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg" />
                </Form.Group>

                <div className="row">

                <div className="col-lg-6">
                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg"/>
                </Form.Group>
                </div>
                <div className="col-lg-6">
                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg"/>
                </Form.Group>
                </div>
                </div>
                </div>
                <button className='btn btn-danger p-3 text-white'>Save Changes</button>
        </Form>
        </div>

      </div>
    </div>
   </div>
  )
}

export default Accountdetails