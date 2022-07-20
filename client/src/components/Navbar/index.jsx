import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='nabvarContainer'>
      <Link to="/">Volver al home</Link>
      <Link to="/services">Paquetes</Link>
      <h1>Acá van los elementos</h1>
    </div>
  )
}

export default Navbar