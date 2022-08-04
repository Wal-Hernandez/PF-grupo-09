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
              <div>Fecha de salida: {e.start_date}</div>
              <div>Fecha de llegada: {e.end_date}</div>
              <div>Precio: ${e.price}</div>
              <div>Stock: {e.stock}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}