import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "./homeBody.css";
import { useDispatch, useSelector } from 'react-redux';
import { getPackages } from '../../redux/actions/getPackages';
import { getMainPackages } from '../../redux/actions/getMainPackages';
import { getCities } from '../../redux/actions/getCities';

export default function HomeBody() {
  const { packages, showPackages } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities())
    !packages.length ?
      dispatch(getPackages())
      : !showPackages.length ?
        dispatch(getMainPackages())
        : console.log("hecho")
  }, [dispatch, packages, showPackages]);


  return (<>
    <div className="homeViewContainer">
      <div className='ofertasContainer'>
        <h1>Ofertas</h1>
      </div>
      <div className='mainViewContainer'>

        {showPackages.length ? (showPackages.map(e => {
          return (
            <div key={e.id} className='div-key-card'>
              <Link to={`/details/${e.id}`}>

                <div class="card">
                  <h3 class="card-title">{e.name}</h3>
                  <img class="card-img-top" src={e.hotel.urlImage} alt="Card image cap" />
                  <p class="card-text">${e.price}</p>
                  <p class="card-text">{e.hotel?.name}</p>
                </div>

              </Link>
            </div>
          )
        })) : (<div> loading</div>)}

      </div>
      <div>
        <Link to='/services'>
          <button class='btn btn-sm'>
            <h3>Ver todos los paquetes</h3>
          </button>
        </Link>
      </div>
    </div>
  </>
  )

}

