import React from 'react'
import Contacto from '../Contacto';
import About from '../About';
import Mensaje from '../Mensaje';
import { NavLink } from 'react-router-dom';
import './footer.css'

function Footer() {
  return (
    <div className='FooterContainer'>
      <div>
        <About/>
      </div>
      <form>
      <div>
        <Mensaje/>
      </div>
      </form>
      <div>
        <Contacto/>
      </div>
      <div>
<NavLink to ="/faq"> Preguntas Frecuentes</NavLink>

      </div>
    </div>
  )
}

export default Footer