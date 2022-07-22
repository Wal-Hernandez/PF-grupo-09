import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "./homeBody.css";
import { useDispatch, useSelector} from 'react-redux';
import { getPackages } from '../../redux/actions/getPackages';

export default function HomeBody() {
  const packages = useSelector((state) => state.packages)
  const dispatch = useDispatch();

  useEffect(() => {
    !packages.length ? 
    dispatch(getPackages()) : console.log("error")
}, [dispatch, packages]);

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