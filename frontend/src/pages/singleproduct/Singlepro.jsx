import React, { useContext, useEffect,} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import './single.css'
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Related from './Related';
import './gits.css'
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';
import { LoginContext } from '../context/Loginapi';

const Singlepro = () => {
  const{auth}=useContext(LoginContext)

  // console.log(auth)
  const tokenuser=auth?.jwttoken
  // console.log(tokenuser)
const[dataget,setdata]=useState({})
const[incre,setincre]=useState(0)
const[reviewdata,setreviewdata]=useState({
  comment:"",
  rating:0,
  revietitle:"",
  reviewbody:""
})
  const{id}=useParams()
  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        const response = await axios.get(`http://localhost:3010/singleproduct/${id}`);
        const dataitem = response?.data?.singledata;
        setdata(dataitem);
      } catch (error) {
        console.error('Error fetching single data:', error);
      }
    };
    fetchSingleData();
  }, [id]);

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey);
        return (
          <button
            className="acc"
            type="button"
            style={{ backgroundColor: "transparent", border: "0" }}
            onClick={decoratedOnClick}>
            {children}
          </button>
        );
      }

 const handlereview=(e)=>{
  const{name,value}=e.target
  setreviewdata({...reviewdata,[name]:value})
 }
 const reviewdatapost = async (e) => {
  e.preventDefault();
  try {
 if (!reviewdata.comment || !reviewdata.rating || !reviewdata.revietitle || !reviewdata.reviewbody) {
    toast.error("Please fill out all fields.");
    return;
  }
    const response = await axios.post(
      `http://localhost:3010/singleproduct/${id}/review`,
      reviewdata,
      {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${tokenuser}`,
        },
      }
    );
    // console.log(response);
    setreviewdata({
      comment: "",
      rating: 0,
      revietitle: "",
      reviewbody: "",
    });
    toast.success("Review Created");
  } catch (error) {
    console.error("Error creating review:", error);
    toast.error("Review not created");
  }
};
const deletereviewdata = async (reviewid) => {
  try {
    const response = await axios.post(`http://localhost:3010/singleproduct/${id}/review/${reviewid}`, reviewdata,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenuser}`,
      },
    });
    toast.success('Review deleted successfully.');

    // Update the state after deleting the review
    const updatedReviews = dataget.reviews.filter((review) => review._id !== reviewid);
    const updatedDataget = { ...dataget, reviews: updatedReviews };
    setdata(updatedDataget);
  } catch (error) {
    console.error('Error deleting review:', error);
    // Handle error and show toast message
  }
};
if (!dataget) {
  return <div>Loading...</div>;
}

// const { categoryname } = dataget?.category;

  return (
    <div>


    {
      dataget && (    <div>
        <div className="container-fluid">
            <div className="row text-center text-white">
            </div>
                              <div className="row padd-5">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                  <div className="pro-img">
                                      <div className="row">
                                          <div className="col-12">
                                          <div>
                                          <img src={dataget.image} alt="" className='img-fluid' />
                                      </div>
                                          </div>
                                      </div>
                                     <div className="row py-4">
                                      <div className="col-3"><img src={dataget.image} alt=""  className='img-fluid'/></div>
                                      <div className="col-3"><img src={dataget.image} alt=""  className='img-fluid'/></div>
                                      <div className="col-3"><img src={dataget.image} alt=""  className='img-fluid'/></div>
                                      <div className="col-3"><img src={dataget.image} alt=""  className='img-fluid'/></div>
                                     </div>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                  <div className="pro-img-2">

                                     <h6>Category : {dataget?.category?.categoryname}</h6>
                                     <h6>Price : ${dataget.price}</h6>
                                     {/* <h6>{dataget.slug}</h6> */}
                                     <h6>Brand : {dataget.brand}</h6>
                                     <p className='d-flex flex-wrap gap-3'><p>
                          </p>
                          {dataget?.reviews?.length > 0 ? <span>({dataget?.reviews?.length} customer reviews) {dataget?.reviews?.length > 3 ? <p className='starability-result ' data-rating="3"></p> : <p className='starability-result ' data-rating="0"></p>}</span> : null}


                             </p>
                                     <hr/>
                                     <p>{dataget.description}</p>
                                     <div className='d-flex'>
                                      <h6>Color : </h6>
                                      <ul className='ul-review'>
                                          <li className='li-review active'></li>
                                          <li className='li-review-2'></li>
                                          <li className='li-review-3'></li>
                                          <li className='li-review-4'></li>
                                      </ul>
                                      </div>
                                     <div className='d-flex'>
                                      </div>
                                       <div className='main-side'>
                                          <div className='quantity'>
                                              <p className='inp-inp'>{incre}</p>
                                              <div className='sub' onClick={()=>{setincre(incre-1)}}>-</div>
                                              <div className='plus'  onClick={()=>{setincre(incre+1)}}>+</div>
                                          </div>

                                          <Link className='btn-theme'>Add to cart</Link>
                                       </div>
                                     <div>
                                      <div className='d-flex  justify-content-between flex-wrap mt-2'>
                                          <div className='d-flex gap-2 '>
                                              <p ><FaRegHeart className='text-danger'/></p>
                                              <p>Add To List</p>
                                          </div>
                                          <div className='d-flex gap-2 '>
                                              <p><FaCodeCompare className='text-danger' />
                      </p>
                                              <p>Add To Compare</p>
                                          </div>
                                      </div>
                                      {/* <hr/> */}
                                      <div className='d-flex justify-content-between flex-wrap'>
                                      <p><span className='text-danger '>code</span> : Ch-3xml</p>
                                      <p className='text-end'><span className='text-danger' >share</span>  <FaFacebook /> <FaInstagram /> <FaWhatsapp /> <FaTwitter /></p>
                                      </div>

                                     </div>
                                  </div>

                              </div>
                          </div>

            <div className="container padd">
                <div className="row padd">
                <Tabs
              defaultActiveKey="Review"
              id="justify-tab-example"
              className="mb-2"
              justify
              variant='underline'

            >
              <Tab eventKey="Information" title="Information">
               <div className='bor-review'>
                 <p className='font-review'>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                 </p>
               </div>
              </Tab>
              <Tab eventKey="description" title="Description">
              <div className='bor-review'>
                 <p className='font-review'>
                {dataget?.description}
                 </p>
               </div>
              </Tab>
              <Tab eventKey="Review" title={`Review (${dataget?.reviews?.length})`} variant="underline" color='red'>
               <div className='bor-review'>
                <div className='bor-review-2'>
                    <h4>Customer Reviews</h4>
                    <Accordion>
                      <div>
                        <div className='d-flex justify-content-between align-items-center mt-3 flex-wrap'>
                            <div className='d-flex gap-3 flex-wrap'>

                            {dataget?.reviews?.length > 3 ? <p className='starability-result ' data-rating="3"></p> : <p className='starability-result ' data-rating="0"></p>}



                           </div>
                          <p><CustomToggle eventKey="0" className="flex-end">write a review</CustomToggle></p>
                        </div>
                        <br/>
                        <hr/>
                        <Accordion.Collapse eventKey="0">
                         <div>
                            <h5 className='mt-3'>Write a review</h5>
                            <Form  onSubmit={reviewdatapost}>
                            <fieldset className="starability-slot">
                            <input type="radio" id="no-rate" className="input-no-rate" name="rating" value="0" defaultChecked aria-label="No rating." />
          <input
            type="radio"
            id="first-rate1"
            name="rating"
            value={1}
            checked={reviewdata.rating === 1}
            onChange={handlereview}
          />
          <label htmlFor="first-rate1" title="Terrible">1 star</label>

          <input
            type="radio"
            id="first-rate2"
            name="rating"
            value={2}
            checked={reviewdata.rating === 2}
            onChange={handlereview}
          />
          <label htmlFor="first-rate2" title="Not good">2 stars</label>

          <input
            type="radio"
            id="first-rate3"
            name="rating"
            value={3}
            checked={reviewdata.rating === 3}
            onChange={handlereview}
          />
          <label htmlFor="first-rate3" title="Average">3 stars</label>

          <input
            type="radio"
            id="first-rate4"
            name="rating"
            value={4}
            checked={reviewdata.rating === 4}
            onChange={handlereview}
          />
          <label htmlFor="first-rate4" title="Very good">4 stars</label>

          <input
            type="radio"
            id="first-rate5"
            name="rating"
            value={5}
            checked={reviewdata.rating === 5}
            onChange={handlereview}
          />
          <label htmlFor="first-rate5" title="Amazing">5 stars</label>
        </fieldset>
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="title" name='revietitle' value={reviewdata.revietitle} onChange={handlereview}/>
              </Form.Group>
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput3">
                <Form.Label>comment</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" name='comment' value={reviewdata.comment} onChange={handlereview}/>
              </Form.Group>
              <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Body of Review(1500 words)</Form.Label>
                <Form.Control as="textarea" rows={4}  value={reviewdata.reviewbody} name='reviewbody' onChange={handlereview}/>
              </Form.Group>
              <Button className='btn btn-dark text-end mt-2 ' type='submit'>Post Comment</Button>
            </Form>
                         </div>
                        </Accordion.Collapse>
                      </div>
                    </Accordion>
                    {dataget?.reviews?.map((ele)=>{
                      return(
                    <div key={ele._id}>
                          <div className='mar-review'>
                       <p className='starability-result ' data-rating={ele.rating}></p>
                  <h5>{ele?.author?.username}</h5>
                  <img src={ele?.author?.image} alt="" style={{width:"70px",height:"70px"}}/>
                  <h6 className='mar-review-2'>
                    {ele.comment}
            </h6>
            <p  className='mar-review-2 text-gray'>{ele.reviewtitle}</p>
            <p  className='mar-review-2'>{ele.reviewbody}</p>

            <p className='text-end'>{ele?.author?.email}</p>
                        </div>

                        { auth?.user?.userId===ele?.author?._id ?
                        <div>
                          <button className='btn btn-danger' onClick={()=>deletereviewdata(ele._id)}> Delete</button>
                          {/* <button className='btn btn-success'> update</button> */}
                        </div> :null}
                        <hr/>
                    </div>



                      )
                    })}


        </div>  </div>
              </Tab>
            </Tabs>
                </div>
            </div>
        </div>
        <Related/>
        </div>)
    }
     </div>



  )
}

export default Singlepro