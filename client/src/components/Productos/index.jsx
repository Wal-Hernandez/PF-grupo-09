import React from 'react'
import "./productos.css"
import { Link } from 'react-router-dom'


export default function Productos(props) {

  const { currentPackages } = props
  const packages = currentPackages

  return (
    // <div class="row row-cols-1 row-cols-md-2 g-4">

    //   <ul class="list-group list-group-flush">
    //     {packages.map((e) => {
    //       return (
    //         <div key={e.id} class="card package-item rounded-0 my-1">
    //           <Link to={"/details/" + e.id}>
    //             <li class="list-group-item">
    //               <div class="card-body">
    //                 <div>
    //                   <p class="card-text card-main c-city">Nombre paquete</p> <br />
    //                   <h5 class="card-title card-main c-name">{e.name}</h5>
    //                 </div>
    //                 <div>
    //                   <p class="card-title card-main c-city">Ciudad</p> <br />
    //                   <h5 class="card-title card-main c-name">{e.city.name}</h5>
    //                 </div>
    //                 <div>
    //                   <p class="card-title card-main c-city">Fecha de salida</p> <br />
    //                   <h5 class="card-title card-main c-name">{new Date(e.start_date).toLocaleString('es-ES')}</h5>
    //                 </div>
    //                 <div>
    //                   <p class="card-title card-main c-city">Fecha de llegada</p> <br />
    //                   <h5 class="card-title card-main c-name">{new Date(e.end_date).toLocaleString('es-ES')}</h5>
    //                 </div>
    //                 <div>
    //                   <p class="card-title card-main c-city">Precio</p> <br />
    //                   <h5 class="card-title card-main c-name">${e.price}</h5>
    //                 </div>
    //                 <div>
    //                   <p class="card-title card-main c-city">Stock</p> <br />
    //                   <h5 class="card-title card-main c-name">{e.stock}</h5>
    //                 </div>
    //               </div>
    //             </li>
    //           </Link>
    //         </div>
    //       )
    //     })}
    //   </ul>
    // </div>
  <div class="row row-cols-4 row-cols-md-2 g-2 cont">
  
    {packages.map((e) => {return(
      <div class="col">
        <Link to={"/details/" + e.id}>
        <div key={e.id} class="card cardservices">
         <img src={e.city.image} class="card-img-top" alt="..."/>
         <div class="">
        <h5 class="titleservices">{e.name}</h5>
        <h5 class="titleservicess">{e.city.name}</h5>
        <div className='fechasservices'>
        <p class="">Salida <h5 class="titleservicess">{new Date(e.start_date).toLocaleString('es-ES')}</h5></p>
        <p class="">Llegada <h5 class="titleservicess">{new Date(e.end_date).toLocaleString('es-ES')}</h5></p>
      </div>
        <div className='priceservices'>
        <h5 class="">${e.price}</h5>
   
        <p>Stock <h5 class="">{e.stock}</h5></p>
        
        
        </div>
      </div>
      </div>
      </Link>
      </div>
    )
    })}
   

</div>
  )
}

