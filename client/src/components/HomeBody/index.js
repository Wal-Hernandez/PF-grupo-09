import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./homeBody.css";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../redux/actions/getPackages";
import { getMainPackages } from "../../redux/actions/getMainPackages";
import { getCities } from "../../redux/actions/getCities";

export default function HomeBody() {
  const { packages, showPackages } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
    !packages.length
      ? dispatch(getPackages())
      : !showPackages.length
      ? dispatch(getMainPackages())
      : console.log("hecho");
  }, [dispatch, packages, showPackages]);

  console.log("show", showPackages);

  return (
    <>
      {/* <div className="homeViewContainer"> */}

      {/* <div className="mainViewContainer">
          {showPackages.length ? (
            showPackages.map((e) => {
              return (
                <div key={e.id} className="div-key-card">
                  <Link to={`/details/${e.id}`}>
                    <div class="card">
                      <h3 class="card-title">{e.name}</h3>
                      <img
                        class="card-img-top"
                        src={e.hotel?.urlImage}
                        alt="Card image cap"
                      />
                      <p class="card-text">${e.price}</p>
                      <p class="card-text">{e.hotel?.name}</p>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div> loading</div>
          )}
        </div> */}
      <div class="container cont-card">
        <div className="ofertasContainer">
          <h1>Ofertas</h1>
        </div>
        <div class="row g-3">
          {showPackages.length ? (
            showPackages.map((e) => {
              return (
                <div class="col-12 col-md-6 col-lg-4" key={e.id}>
                  <Link to={`/details/${e.id}`}>
                    <div class="card">
                      <img
                        class="card-img-top"
                        src={e.hotel.urlImage}
                        alt="Card image cap"
                      />
                      <div class="card-body ">
                        <h5 class="card-title card-main c-name ">{e.name}</h5>
                        <p class="card-text card-main c-city ">
                          {e.city?.name}
                        </p>
                        <p class="card-text  card-main c-hotel ">
                          Traslado + {e.hotel?.name}
                        </p>
                        <p class="card-text  card-main c-precio ">
                          Precio por persona
                        </p>
                        <p class="card-text  card-main c-price ">$ {e.price}</p>
                        <p class="card-text  card-main c-text">
                          Incluye precios, tasas y cargos.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div> loading</div>
          )}
        </div>
        <div class="btn-pack">
          <Link to="/services">
            <button class="btn btn-sm">
              <h3>Ver todos los paquetes</h3>
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}
