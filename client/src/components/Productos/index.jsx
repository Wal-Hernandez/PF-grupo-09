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
          <div key={e.id} className="package-item">
            <Link to={"/details/" + e.id}>
              <img class="card-img-top" src={e.hotel?.urlImage} alt="Card image cap" />
              <div>Nombre paquete: {e.name}</div>
              <div>Ciudad: {e.city.name}</div>
              <div>Fecha de salida: {new Date(e.start_date).toLocaleString('es-ES')}</div>
              <div>Fecha de llegada: {new Date(e.end_date).toLocaleString('es-ES')}</div>
              <div>Precio: ${e.price}</div>
              <div>Stock: {e.stock}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}