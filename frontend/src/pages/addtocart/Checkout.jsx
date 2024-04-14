import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { FaExclamation } from "react-icons/fa";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import "./Check.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button, FloatingLabel, Table } from "react-bootstrap";
const Checkout = () => {

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <button
        className="acc"
        type="button"
        style={{ backgroundColor: "transparent", border: "0" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <>
      {/* <div className="container-fluid wisht text-center p-5">
        <div className="row">
      <div className="col-12 shopy py-5">
            <h1>CHECKOUT</h1>
            <Link to="/">HOME</Link>
            <Link to="/wishlist">//CHECKOUT</Link>
          </div>
          </div>
      </div> */}
      <div className="container my-5">
        <div className="row align-middle">
          <div className="col-12">
            <Accordion>
              <Card>
                <Card.Header>
                  <FaExclamation />
                  Returning Customer ?
                  <CustomToggle eventKey="0">Click here to login</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="my-4">
                      <p style={{ color: "grey" }}>
                        If you have shopped with us before, please enter your
                        details below. If you are a new customer, please proceed
                        to the Billing & Shipping section.
                      </p>
                    </div>
                    <Form>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <Form.Label>Username or Email address</Form.Label>

                          <Form.Control type="text" size="lg" />
                          </div>
                        <div className="col-lg-6 col-md-12">
                          <Form.Label>Password</Form.Label>

                          <Form.Control type="text" placeholder="password" size="lg"/>
                        </div>
                      </div>
                      <button type="submit" className="my-3 shop btn btn-dark">
                        Login
                      </button>{" "}
                      <Form.Check type="checkbox" label="Remember Me" />
                      <br />
                      <div className="lost my-4">
                        <Link>Lost Your Password?</Link>
                      </div>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <div className="row my-3 h-50">
              <div className="col-12">
                <Accordion>
                  <Card>
                    <Card.Header>
                      <FaExclamation /> Have a coupon?
                      <CustomToggle eventKey="0">
                        Click here to enter your code
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="my-4">
                          <p style={{ color: "grey" }}>
                            If you have a coupon code, please apply it below.
                          </p>
                        </div>

                        <Form>
                          <Row>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder="Coupon Code"
                                size="xxl"
                              />
                            </Col>
                            <Col>
                              <button className="coup">APPLY CODE</button>
                            </Col>
                          </Row>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 c0l-sm-12">
            <div>
              <h5 className="mt-3 mb-4">Billing Details*</h5>
            </div>
            <div className="formm">
              <Form>
                <Row>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" size="lg" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>

                    <Form.Control type="text" placeholder="Last name" size="lg" />
                  </Col>
                </Row>
                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Company Name(Optional)</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg" />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Select defaultValue="Choose..." size="lg">
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>America</option>
                    <option>London</option>
                    <option>Europe</option>
                    <option>Australlia</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="House Number and Street Name"
                    size="lg"
                  />
                </Form.Group>
                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Town/City</Form.Label>
                  <Form.Control type="text" size="lg" />
                </Form.Group>

                {/* District */}
                <Form.Group controlId="formGridState">
                  <Form.Label>District</Form.Label>
                  <Form.Select defaultValue="Choose..." size="lg">
                    <option>Faridabad</option>
                    <option>India</option>
                    <option>America</option>
                    <option>London</option>
                    <option>Europe</option>
                    <option>Australlia</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Postal Code/ Zip(Optional)</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg"/>
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Phone(Optional)</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg" />
                </Form.Group>

                <Form.Group className="my-3" controlId="formGridAddress1">
                  <Form.Label>Email Address*</Form.Label>
                  <Form.Control autoComplete="off" type="text" size="lg" />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Create an Account" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Ship to a different Address"
                  />
                </Form.Group>

                {/* order notes */}
                <Form.Group className="my-3" id="formGridCheckbox">
                  <Form.Label>Order Notes(Optional)</Form.Label>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                  label="order"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      size="xxl"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Form>
            </div>
          </div>

          {/* //Your Order */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="order">
              <h5>You Orders</h5>
              <div>
                <div>
                <Table responsive>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Order</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Satin Gown *1</td>
                        <td>69.9</td>
                      </tr>
                      <tr>
                        <td>printed Cotton</td>
                        <td>79.9</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>subtotal</td>
                        <td>8522</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>Flat Rate 2.00</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>89.00</td>
                      </tr>
                    </tfoot>
                  </Table>

                  {/* ACC */}
                  <div className="ACC mt-3">
                  <Accordion defaultActiveKey="0">
                    <Card.Header>
                      <CustomToggle eventKey="0">
                        {" "}
                        <Form.Group>
                          <Form.Check
                            inline
                            label="DIRECT BANK"
                            name="group1"
                            type="radio"
                            className="mt-1"
                          />
                        </Form.Group>
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>

                  {/* 2nd */}
                  <Accordion>
                    <Card.Header>
                      <CustomToggle eventKey="1">
                        <Form.Group>
                          <Form.Check
                            inline
                            label="CHECK PAYMENTS"
                            name="group1"
                            type="radio"
                            className="mt-1"
                          />
                        </Form.Group>
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                       <p> Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>

                  <Accordion>
                    <Card.Header>
                      <CustomToggle eventKey="2">
                        <Form.Group>
                          <Form.Check
                            inline
                            label="CASH ON DELIVERY"
                            name="group1"
                            type="radio"
                            className="mt-1"
                          />
                        </Form.Group>
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body><p>Pay with cash upon delivery</p></Card.Body>
                    </Accordion.Collapse>
                  </Accordion>

                  <Accordion>
                    <Card.Header>
                      <CustomToggle eventKey="3">
                        {" "}
                        <Form.Group>
                          <Form.Check
                            inline
                            label="PAYPAL EXPRESS CHECKOUT  "
                            name="group1"
                            type="radio"
                            className="mt-1"
                          />
                        </Form.Group>
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <p>Pay via PayPal; you can pay with your credit card if you
                        don’t have a PayPal account.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                  </div>
                  {/* Bank-section-end */}
                  <div className="my-4">
                    <p className="priv">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <Link> privacy policy.</Link>
                    </p>
                    <Form>
                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="I have read and agree to the websites terms and conditions *"
                        />
                      </Form.Group>
                    </Form>
                    <div className="logg col-12  mt-4">
                      <center><Link to='/order_success'type="submit" className="btn btn-dark px-5 text-white">PLACE ORDER</Link></center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;