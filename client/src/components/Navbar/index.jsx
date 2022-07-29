import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useAuth } from "../../context/context";

import { getAuth } from "firebase/auth";

function Navbar({userlog}) {



const auth = getAuth();
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
} else {
  // No user is signed in.
}

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };



  
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
          {userlog? <div>
            <h1>{userlog.nombre +" "+ userlog.apellido}</h1>
            <button
          class='btn btn-sm'
          onClick={handleLogout}
        >
          Logout
        </button>
          </div>: <button>
            <Link to="/login">Login</Link>
          </button>}
         
        </li>
      </ul>
    </div>
  )
}

export default Navbar