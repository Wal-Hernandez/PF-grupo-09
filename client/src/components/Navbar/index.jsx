import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useAuth } from "../../context/context";
import logo from "../../images/Buspack.png"
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
       <div>
            <img src={logo} alt="Buspack" class="logo-buspack"/>
        </div>
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
          {userlog? <div class="userlog-container">
            <h5>{userlog.nombre +" "+ userlog.apellido}</h5>
            <button
          class='btn btn-sm'
          onClick={handleLogout}
        >
          Logout
        </button>
          </div>: <Link to="/login">
            <button class='btn btn-sm'>
              Login
            </button>
          </Link>}
         
        </li>
      </ul>
    </div>
  )
}

export default Navbar