import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { CiBasketball } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import img12 from "../images/img13.jpg"
import img9 from "../images/img8.jpg"
import blog from "../images/img11.jpg";
import img13 from "../images/img12.jpg"
import Form from "react-bootstrap/Form";
const Singleblog = () => {
  return (
    <>
     {/* <div className="container-fluid blogd text-center padd-6">
     <h1>BLOG DETAILS</h1>
            <Link className="ho" to="/">HOME</Link>
            <Link className="ho" to="/Blogdetails">//BLOG DETAILS</Link>
     </div> */}


      <div className="container my-1 bl padd-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrap">
              <div className="img9 d-flex justify-content-center">
                <img src={img9} className="img-fluid rounded w-100"></img>
              </div>
              <div className="mb-3 mt-3">
                <ul className="date d-flex ">
                  <li className="post">
                    <Link className="set" to="/Blogsection">22/10/2024</Link>
                  </li>
                  <li className="userp">Hector Lovett</li>
                </ul>
              </div>

              <div>
                <h1 className="maint">
                  Lorem ipsum dolor sit amet conse adipisi elit sed do eiusmod
                  tempor.
                </h1>
              </div>

              <div className="deta">
                <p className="deta1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore eto dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamcol laboris nisi ut aliquipp ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit inloifk voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaec cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <blockquote className="bloc">
                  <div>
                    <p className="bp">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore eto dolore
                      magna aliqu
                    </p>
                  </div>
                  <footer className="text-white fs-5">—Rachel Leonard</footer>
                </blockquote>

                <p className="lor">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore eto dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamcol laboris nisi ut aliquipp ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit inloifk voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

              <div className="lorem">
                <p className="loremp">
                  <img
                    src={blog}
                    alt="..."
                    className="img fluid float-end lorem1"
                  ></img>
                  <span>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, whenan unknown
                    printer took a galley of type and scrambled it to make a
                    type tun tuni is specimen book. It has survived not only
                    five centuries, but also the leap into tuna electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing
                  </span>
                </p>
                <p className="my-4 loremp">
                  leu fugiat nulla pariatur. Excepteur sintocca cupidatat non
                  proident, sunt in culpa qui off deserunt mollit anim id est
                  laborum. Sed utl perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium
                </p>

                <p className="loremp">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore eto dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamcol laboris nisi ut aliquipp ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit inloifk voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="loremp">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore eto dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamcol laboris nisi ut aliquipp ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit inloifk voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div></div>
              {/* Tages and Share */}
              <div className="mt-5 d-flex justify-content-between tage p-4 flex-wrap">
                <div className="tags">

                  <Link className="tag1">Mobile,</Link>
                  <Link className="tag1">Laptop,</Link>
                  <Link className="tag1">Smart,</Link>
                  <Link className="tag1">Tv</Link>
                </div>
                <div className="share">
                  <span >Share:</span>
                  <Link className="share1">
                    <FaFacebook />
                  </Link>
                  <Link className="share1">
                    <CiBasketball />
                  </Link>
                  <Link className="share1">
                    <FaPinterestP />
                  </Link>
                  <Link className="share1">
                    <CiTwitter />
                  </Link>
                </div>
              </div>

              {/* UnderTAg */}
              <div className="d-flex justify-content-between flex-wrap ">
                <div className="under">
                  <div className="thum">
                    <Link className="itag">
                      <img
                        src={blog}
                        alt="..."
                        className="img-fluid rounded under1"
                      ></img>
                    </Link>
                  </div>
                  <div className="dae">
                    <Link className="itag">26 march 2022</Link>
                    <h6 className="u6">Lorem ipsum dolorl amet conse adip</h6>
                  </div>
                </div>
                <div className="under2">
                  <div>
                    <Link className="itag">26 march 2022</Link>
                    <h6 className="u6">Lorem ipsum dolorl amet conse adip</h6>
                  </div>
                  <div className="thum">
                    <Link className="itag">
                      <img
                        src={blog}
                        alt="..."
                        className="img-fluid rounded under1"
                      ></img>
                    </Link>
                  </div>
                </div>
              </div>

              {/* COMMENTS */}
              <div className="comments">
                <h4 className="title1">Comments</h4>

                <div className="contents">
                  <div className="cont1 d-flex flex-wrap">
                    <div className="contimg">
                      <img
                        src={img12}
                        alt="..."
                        className="img-fluid rounded"
                      ></img>
                    </div>
                    <div className="auth">
                      <h4 className="tit mt-3">Marie Jensen-22August,2020</h4>
                      <p className="authp">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore eto
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamcol
                      </p>
                      <div>
                        <Link className="autha">reply</Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="cont1 cont2 d-flex flex-wrap">
                      <div className="contimg">
                        <img
                          src={img13}
                          alt="..."
                          className="img-fluid rounded"
                        ></img>
                      </div>
                      <div className="auth">
                        <h4 className="tit mt-3">Marie Jensen-22August,2020</h4>
                        <p className="authp">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore eto
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamcol
                        </p>
                        <div>
                          <Link className="autha">reply</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="cont1 d-flex flex-wrap">
                      <div >
                        <img
                          src={img12}
                          alt="..."
                          className="img-fluid rounded contimg"
                        ></img>
                      </div>
                      <div className="auth">
                        <h4 className="tit mt-3">Marie Jensen-22August,2020</h4>
                        <p className="authp">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore eto
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamcol
                        </p>
                        <div>
                          <Link className="autha">reply</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leave a Comments */}
              <div className="leave ">
                <h4 className="tile">Leave a Comments</h4>
                <div className="comments">
                  <Form>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 my-3">
                        <Form.Control type="text" placeholder="Name*" size="lg"/>
                      </div>
                      <div className="col-lg-6 col-md-6 my-3">
                        <Form.Control type="text" placeholder="Email*" size="lg"/>
                      </div>
                    </div>
                    <Form.Group className="my-3" controlId="formGridAddress1">
                      <Form.Control placeholder="Subject(Optional)" size="lg"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={6}  placeholder="Message"/>
      </Form.Group>
                  <div className="cmtbtnp">
                    <button className="cmtbtn"type="submit">
                          Send a Comment
                    </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;