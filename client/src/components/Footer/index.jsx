import React from 'react'
import Contacto from '../Contacto';
import Mensaje from '../Mensaje';
import { NavLink } from 'react-router-dom';
import './footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='footer-container-top'>
        <div className='footerElement'>
          <Link to="/about">
            <button class="btn btn-dark">Acerca de nosotros</button>
          </Link>
        </div>
        <form>
          <div className='footerElement'>
            <Mensaje />
          </div>
        </form>
        <div className='footerElement'>
          <Contacto />
        </div>
      </div>
      <div className='footer-container-bottom'>
        <NavLink to="/faq">
          <button className='btn btn-dark'>Preguntas Frecuentes</button>
        </NavLink>

      </div>
    </div>
  )
}

export default Footer