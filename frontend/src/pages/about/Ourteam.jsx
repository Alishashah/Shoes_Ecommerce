import React from 'react'
import '../shome/css/main.css'
import Imgteam  from'../images/img17.png'

const Ourteam = () => {
  return (
    <div className="container padd">
        <center><h1 className='font-dis-fea'>OUR TEAM </h1></center>
        <center> <p className='font-dis-fea-2'>There are many variations of passages of Lorem Ipsum available</p></center>
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className='img-hov'>
                <img src={Imgteam} alt="" className='img-fluid' />
                </div>
                <center><h6 className='mt-2'>Jander Durham</h6></center>
                <center><p>Team member</p></center>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className='img-hov'>
                <img src={Imgteam} alt="" className='img-fluid' />
                </div>
                <center><h6 className='mt-2'>Jander Durham</h6></center>
                <center><p>Team member</p></center>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className='img-hov'>
                <img src={Imgteam} alt="" className='img-fluid' />
                </div>
                <center><h6 className='mt-2'>Jander Durham</h6></center>
                <center><p>Team member</p></center>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className='img-hov'>
                <img src={Imgteam} alt="" className='img-fluid' />
                </div>
                <center><h6 className='mt-2'>Jander Durham</h6></center>
                <center><p>Team member</p></center>
            </div>




        </div>
    </div>
  )
}

export default Ourteam