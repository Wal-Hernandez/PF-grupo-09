import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useAuth } from "../../context/context";


function Navbar({userlog}) {


  

  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };



  
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
          {userlog? <div>
            <h1>{userlog.nombre +" "+ userlog.apellido}</h1>
            <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          logout
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