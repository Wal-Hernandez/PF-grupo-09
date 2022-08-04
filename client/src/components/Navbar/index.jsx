import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useAuth } from "../../context/context";
import logo from "../../images/Buspack.png"
import { getAuth } from "firebase/auth";
import { useDispatch} from 'react-redux'
import {clearCartLogout}from '../../redux/actions/clearCartLogout'
function Navbar({userlog}) {



const auth = getAuth();
const user = auth.currentUser;
const dispatch=useDispatch();
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
     dispatch(clearCartLogout())
    } catch (error) {
      console.error(error.message);
    }
  };



  
  return (
    <div class="navbar navbar-expand-lg">
       <div>
        <Link to="/">
            <img src={logo} alt="Buspack" class="logo-buspack"/>
        </Link>
        </div>
      <ul class="navbar-nav mr-auto">
      <Link to="/shoppingcart">
          <h1>Ir al carrito</h1>
        </Link>
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