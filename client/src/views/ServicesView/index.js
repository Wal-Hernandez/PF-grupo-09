import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './servicesView.css'
function Services() {
  return (<>
    <div>
    <Navbar />
    </div>
    <div className='servicesViewContainer'>
    <div>
   <b>Busqueda</b>
    </div>
    <div>calendario</div>
    <div><b>Matching de busqueda</b></div>
    <div>
    <b>Filtrado de paquetes</b>
    </div>
    <div>
    <b> Lista de paquetes</b>
    </div>
    <div>
      Bot de ayuda
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Services