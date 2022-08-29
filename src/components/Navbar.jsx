import React from 'react'
import navlogo from '../images/logo192.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={navlogo}  className="nav-logo" alt="navlogo" />
      <h2 className='nav-title'>Meme Generator</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar