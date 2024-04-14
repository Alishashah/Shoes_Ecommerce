import React from 'react'
import Img7 from '../images/img37.jpg'
import Img8 from '../images/img35.jpg'
import Img9 from '../images/img2.jpg'
import { SlCalender } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import './css/main.css'
import { Link } from 'react-router-dom';


const Blog = () => {

    const items=[
        {
            id:1,
            image:Img7,
            des:"The  with an annual growth rate of 3.43% (CAGR 2024-2028)."
        },
        {
            id:2,
            image:Img8,
            des:"The with an annual growth rate of 3.43% (CAGR 2024-2028)."
        },
        {
            id:3,
            image:Img9,
            des:"The with an annual growth rate of 3.43% (CAGR 2024-2028)."
        }
    ]
  return (
    <div className="container-fluid padd mar-top-bottom">
      <center><p className='font-dis-fea'>Latest Blogs</p></center>
      <center><p className='font-dis-fea-2'> Lorem ipsum dolor ametcons adipisicing elit sed</p></center>
      <div className="row">
        {items.map((i)=>{
        return(

            <div key={i.id} className="col-md-6 col-lg-4 col-sm-12 ">
              <div className='mt-2 px-3'>
              <div className='img-wrapper'>
                  <img src={i.image} alt="" className='img-fluid inner-img' />
                  </div>
                  <div className='dis-blog mt-1'>
                   <div className='dis-blog-2'>
                   <p><SlCalender className='text-danger' /></p>
                    <p>24/feb/2024</p>
                   </div>
                   <div className='dis-blog-2'>
                   <p><IoPersonSharp className='text-danger'/></p>
                   <p>username</p>
                   </div>
                  </div>
                  <h3 className='bn-font mb-1'>{i.des}</h3>
                  <br/>
                  <Link to="/singleblog" className='bn-cl'>Read more</Link>
            </div>
            </div>

        )
    })}
      </div>
    </div>
  )
}

export default Blog