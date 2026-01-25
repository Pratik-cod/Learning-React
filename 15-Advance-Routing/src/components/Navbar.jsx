import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-6 font-bold bg-gray-500 '>
      <h2>Pratik Rane</h2>
      <div className='flex gap-12 '>
<Link to = "./home" >Home</Link>        
<Link to = "./about" >About</Link>        
<Link to = "./contact" >Contact</Link> 
     
      </div>
     
    </div>
  )
}

export default Navbar
