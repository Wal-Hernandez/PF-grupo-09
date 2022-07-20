import React from 'react'
import Contacto from '../Contacto';
import About from '../About';
import Mensaje from '../Mensaje';
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
    </div>
  )
}

export default Footer