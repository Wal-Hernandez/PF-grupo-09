import React from 'react'
import Footer from '../../components/Footer';
import Navbar from "../../components/Navbar";
import './detailsView.css';

function DetailsView() {
  return (<>
  <div>
  <Navbar />
  </div>
  <div className='detailsViewContainer'>
    <div>
  <div>Images</div>
  <div>Nombre</div>
  </div>
  <div>
  <div>fecha y personas</div>
  <div>resumen de lo que incluye</div>
  </div>
  <div>
  <div>Coordenadas</div>
  <div>Hotel</div>
  <div>Actividad</div>
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

export default DetailsView