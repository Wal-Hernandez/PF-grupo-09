import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <button>
            <Link to="/">Volver al home</Link>
          </button>
        </li>
        <li class="nav-item active">
          <button>
            <Link to="/services">Paquetes</Link>
          </button>
        </li>
        <li class="nav-item active">
          <button>
            <Link to="/login2">Login</Link>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar