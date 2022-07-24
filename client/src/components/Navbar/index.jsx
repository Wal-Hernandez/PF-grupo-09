import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className='navElement'>
        <Link to="/">Volver al home</Link>
        </div>
      <div className='navElement'>
        <Link to="/services">Paquetes</Link>
        </div>
      <div className='navElement'>
        <Link to="/login">Login</Link>
      </div>

    </div>

  )
}

export default Navbar