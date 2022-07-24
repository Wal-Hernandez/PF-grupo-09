import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    // <div className='navbarContainer'>
    //   <div className='navElement'>
    //     <Link to="/">Volver al home</Link>
    //     </div>
    //   <div className='navElement'>
    //     <Link to="/services">Paquetes</Link>
    //     </div>
    //   <div className='navElement'>
    //     <Link to="/login">Login</Link>
    //   </div>

    // </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <button class="btn btn-sm btn-outline-secondary" type="button">
            <Link to="/" class="nav-link">Volver al home</Link>
          </button>

          <button class="btn btn-sm btn-outline-secondary" type="button">
            <Link to="/services" class="nav-link">Paquetes</Link>
          </button>
          <button class="btn btn-sm btn-outline-secondary" type="button">
            <Link to="/login" class="nav-link">Login</Link>
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar