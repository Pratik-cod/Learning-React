import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center gap-8'>
          <Link className='text-xl font-bold' to = "/contact/men">Men</Link>
      <Link className='text-xl font-bold' to = "/contact/women">Women</Link>
      <Link className='text-xl font-bold' to = "/contact/kids">Kids</Link>
        
      </div>
      <Outlet />
    </div>
  )
}

export default Contact
