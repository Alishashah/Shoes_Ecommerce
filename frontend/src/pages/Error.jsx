import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
    <div> <center><h1 className='text-danger mt-5 mb-5'>404 page not found</h1></center></div>
    <center><h3 className='text-danger'>GO BACK TO HOME PAGE</h3></center>
    <center><Link to='/' className='btn btn-danger p-2 mt-5 mb-3'>Back to home</Link></center>

    </div>

  )
}

export default Error