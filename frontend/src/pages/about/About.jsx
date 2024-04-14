import React from 'react'
import Blog from '../shome/Blog'
import Saving from '../shome/Saving'
import Ourteam from './Ourteam'
import Topabout from './Topabout'
const About = () => {
  return (
    <div>
      {/* <div className="row">
        <div className='bg-dark d-flex justify-content-center align-items-center padd'>
          <h1 className='text-white'>ABOUT</h1>
        </div>
      </div> */}

        <Topabout/>
        <Saving/>
        <Ourteam/>
        <Blog/>
    </div>
  )
}

export default About