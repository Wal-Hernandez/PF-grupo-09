import React from 'react'
import { Link } from "react-router-dom";
import "./homeBody.css";
function HomeBody() {
  return (<>
    <div className="homeViewContainer">
    <div><h1>Ofertas</h1></div>
    <div>
      <h1>Paquetes</h1>
      <Link to="/details">
        <h2 className="example">Paquete de ejemplo</h2>
      </Link>
      <Link to="/details">
        <h2 className="example2">Paquete de ejemplo</h2>
      </Link>
    </div>
  </div>
  </>
  )
}

export default HomeBody