import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useSelector } from 'react-redux';
import { useAuth } from "../../context/context";
import logo from "../../images/Buspack2.png"
import { getAuth } from "firebase/auth";

import { useDispatch} from 'react-redux'
import {clearCartLogout}from '../../redux/actions/clearCartLogout'
import { rootReducer, initialState } from "../../redux/reducer/rootReducer";
import swal from 'sweetalert';
function Navbar({userlog}) {

const cart = useSelector((state) => state.rootReducer.cart);

  // console.log("cartnav", cart.map((e)=>{e.cartDetails}))
  console.log(cart)
  let totalCart = []
  if( !typeof cart === "object"){
  if(cart !== undefined && cart.length !== 0 ){
    console.log(cart)
    totalCart = cart[0]["cartDetails"]
    console.log(totalCart)
  }
}
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();
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
      swal({
        title: "Cerraste sesion",
        icon: "success",
      })
    } catch (error) {
      console.error(error.message);
    }
  };




  return (

<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">

        <Link to="/">
          <img src={logo} alt="Buspack" class="logo-buspack" />
        </Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <span class="navbar-text">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item  paq-btn">
          <Link to="/services" className='btn-sm '>
          <a class="nav-link" href="#">Paquetes</a>
          </Link>
        </li>
      <li class="nav-item">
        <Link to="/shoppingcart" >
            <i class="fas fa-shopping-cart carrito"></i>
            <span class="badge rounded-pill badge-notification bg-danger">{!totalCart.length?0:totalCart.length}</span>
          </Link>
        </li>
        <li class="nav-item">
        {userlog? <div class="userlog-container">
            <p>{userlog.nombre +" "+ userlog.apellido}</p>
            <div className='btn-sm1'>
            <a class="nav-link " href="#" onClick={handleLogout}>Cerrar Sesion</a>
            </div>
          </div>: <Link to="/login" className='btn-sm'>
          <a class="nav-link " href="#">Iniciar Sesion</a>
          </Link>}

        </li>
        </ul>
      </span>
    </div>
  </div>
</nav>
  )
}

export default Navbar