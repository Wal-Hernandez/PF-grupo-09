import React from 'react'
import { Link } from "react-router-dom";
import "./homeBody.css";
import { useDispatch} from 'react-redux';
import { getPackages } from '../../redux/actions/getPackages';



function HomeBody() {
  
  const dispatch = useDispatch();
  dispatch(getPackages());
  return (<>
    <div className="homeViewContainer">
    <div><h1>Ofertas</h1></div>
    <div>
      
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