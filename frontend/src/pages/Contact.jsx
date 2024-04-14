import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import './shome/css/main.css'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { LoginContext } from "./context/Loginapi";

const Contact = () => {
  const{auth}=useContext(LoginContext)
  return (
    <div className="container-fluid padd-2 mar-top-bottom">
      <div className="row">
        <div className="col-lg-9 col-md-12" data-aos="fade-left">
          <div className="shadow-2">
            <h1 className="head-top" data-aos="fade-out">We Are Here! <br/>Please Send A Quest</h1>
            <Form>
              <div className="row">
                <div className="col-sm-6">
                  <Form.Control type="text" placeholder="Name*" name="email"   size="lg"/>
                </div>
                <div className="col-sm-6">
                  <Form.Control type="text" placeholder="Email*" name="email"   size="lg" />
                </div>
                <div className="col-sm-12 mt-3">
                <Form.Control
          type="text"
          placeholder="Subject(optional)"
          name="text"
          size="lg"
        />
                </div>
                <div className="col-sm-12">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={8}  placeholder="Message" size="lg"/>
      </Form.Group>
                </div>
                <div className="col-3">
                <Button className="buttton-cl">Send Message</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-lg-3 col-md-12" data-aos="fade-right">
          <div>
            <div className="shadow-3 add-dis" >
                <div className=""  >
                <FaHome className="color-code" />
                <h3 className="font-dis-fea-2 mt-4">Address</h3>
                <p className="">your address goes here</p>
                </div>
            </div>
            <div className="shadow-3 add-dis mt-4" >
                <div className="">
                <FaPhoneVolume className="color-code" />
                <h3 className="font-dis-fea-2 mt-4">Phone</h3>

{auth?.user?.phone}
                </div>
            </div>  <div className="shadow-3 add-dis mt-4" >
                <div className="">
                < MdMarkEmailUnread className="color-code" />
                <h3 className="font-dis-fea-2 mt-4">Email / Web</h3>
                {auth?.user?.email}

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
