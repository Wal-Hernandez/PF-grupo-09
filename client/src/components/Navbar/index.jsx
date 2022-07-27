import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div class="navbar navbar-expand-lg">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to="/">
            <button class='btn btn-sm'>
              Volver al home
            </button>
          </Link>
        </li>
        <li class="nav-item active">
          <Link to="/services">
            <button class='btn btn-sm'>
              Paquetes
            </button>
          </Link>
        </li>
        <li class="nav-item active">
          <Link to="/login">
            <button class='btn btn-sm'>
              Login
            </button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar