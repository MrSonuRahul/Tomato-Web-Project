import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>
        
      
    </div>
  )
}

export default Navbar
