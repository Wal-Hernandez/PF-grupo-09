import React from 'react'
import "./productos.css"
import { Link } from 'react-router-dom'


export default function Productos(props) {

  const { currentPackages } = props
  const packages = currentPackages

  return (
    <div className='productos-div'>
      {packages.map((e) => {
        return (
          <div key={e.id} class="card package-item">
            <Link to={"/details/" + e.id}>
              <img class="card-img-top" src={e.hotel?.urlImage} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title card-main c-name">Nombre paquete: {e.name}</h5>
                <p class="card-title card-main c-city">Ciudad: {e.city.name}</p>
                <p class="card-text card-main c-hotel">Fecha de salida: {new Date(e.start_date).toLocaleString('es-ES')}</p>
                <p class="card-text card-main c-hotel">Fecha de llegada: {new Date(e.end_date).toLocaleString('es-ES')}</p>
                <p class="card-text card-main c-price">Precio: ${e.price}</p>
                <p class="card-text card-main c-price">Stock: {e.stock}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}