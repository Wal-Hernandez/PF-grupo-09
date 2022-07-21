import React from 'react'
import Contacto from '../Contacto';
import Mensaje from '../Mensaje';
import { NavLink } from 'react-router-dom';
import './footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='footerElement'>
        <Link to="/about">Acerca de nosotros</Link>
      </div>
      <form>
      <div className='footerElement'>
        <Mensaje/>
      </div>
      </form>
      <div className='footerElement'>
        <Contacto/>
      </div>
      <div>
<NavLink to ="/faq"> Preguntas Frecuentes</NavLink>

      </div>
    </div>
  )
}

export default Footer