import React from 'react'
import "./productos.css"
import { Link } from 'react-router-dom'


export default function Productos(props) {

  const { currentPackages } = props
  const packages = currentPackages

  return (
    <div className='productos-div'>

      <ul class="list-group list-group-flush">
        {packages.map((e) => {
          return (
            <div key={e.id} class="card package-item">
              <Link to={"/details/" + e.id}>
                <li class="list-group-item">
                  <div class="card-body">
                    <div>
                      <p class="card-text card-main c-city">Nombre paquete</p> <br />
                      <h5 class="card-title card-main c-name">{e.name}</h5>
                    </div>
                    <div>
                      <p class="card-title card-main c-city">Ciudad</p> <br />
                      <h5 class="card-title card-main c-name">{e.city.name}</h5>
                    </div>
                    <div>
                      <p class="card-title card-main c-city">Fecha de salida</p> <br />
                      <h5 class="card-title card-main c-name">{new Date(e.start_date).toLocaleString('es-ES')}</h5>
                    </div>
                    <div>
                      <p class="card-title card-main c-city">Fecha de llegada</p> <br />
                      <h5 class="card-title card-main c-name">{new Date(e.end_date).toLocaleString('es-ES')}</h5>
                    </div>
                    <div>
                      <p class="card-title card-main c-city">Precio</p> <br />
                      <h5 class="card-title card-main c-name">${e.price}</h5>
                    </div>
                    <div>
                      <p class="card-title card-main c-city">Stock</p> <br />
                      <h5 class="card-title card-main c-name">{e.stock}</h5>
                    </div>
                  </div>
                </li>
              </Link>
            </div>
          )
        })}
      </ul>
    </div>
  )
}