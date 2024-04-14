import React from 'react'
import Img7 from '../images/img37.jpg'
import Img8 from '../images/img35.jpg'
import Img9 from '../images/img1.jpg'
import Img11 from '../images/img15.jpg'
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom'
import { IoPersonSharp } from "react-icons/io5";
import '../shome/css/main.css'


const Blogssection = () => {

    const items=[
        {
            id:1,
            image:Img11,
            des:" adipisicing elit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
        {
            id:2,
            image:Img8,
            des:"adipisicing elit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
        {
            id:3,
            image:Img9,
            des:"adipisicing elit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
        {
            id:4,
            image:Img8,
            des:"elit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
        {
            id:5,
            image:Img11,
            des:"elit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
        {
            id:6,
            image:Img7,
            des:"elit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
        {
            id:7,
            image:Img11,
            des:"elit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
        {
            id:8,
            image:Img8,
            des:"Llit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
        {
            id:9,
            image:Img9,
            des:"elit sed Lorem ipsum dolor ametcons adipisicing elit sed"
        },
    ]
  return (
    <div className="container-fluid padd-2  mar-top-bottom">
      <center><h1 className='font-di-fea'>Latest Blogs</h1></center>
      <center><p className='font-dis-fea-2'> Lorem ipsum dolor ametcons adipisicing elit sed</p></center>
      <div className="row ">
        {items.map((i)=>{
        return(
<div key={i.id} className="col-md-6 col-lg-4 col-sm-12">
              <div className='padd-4 mar-2 mt-5'>
              <div className='img-wrapper'>
                  <img src={i.image} alt="" className='img-fluid inner-img img-thumbnail' />
                  </div>
                  <div className='dis-blog'>
                   <div className='dis-blog-2'>
                   <p><SlCalender className='text-danger' /></p>
                    <p>24/feb/2024</p>
                   </div>
                   <div className='dis-blog-2'>
                   <p><IoPersonSharp className='text-danger'/></p>
                   <p>username</p>
                   </div>
                  </div>
                  <p className='bn-font'>{i.des}</p>
                  <br/>
                  <Link to="/singleblog" className='bn-cl mt-3'>Read more</Link>
            </div>
            </div>

        )
    })}
      </div>
    </div>
  )
}

export default Blogssection