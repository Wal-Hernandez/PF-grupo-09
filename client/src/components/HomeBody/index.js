import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./homeBody.css";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../redux/actions/getPackages";
import { getMainPackages } from "../../redux/actions/getMainPackages";

import { getCities } from "../../redux/actions/getCities";
import { loadCart } from "../../redux/actions/loadCart";
import { getAuth } from "firebase/auth";

import { getClean } from "../../redux/actions/getClean";
import Loaderpag from "../Loaderpag/Loaderpag";
export default function HomeBody() {
  const { packages, showPackages } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();

  console.log("home", packages);

  const paquetesDisponibles = packages?.filter((e) => {
    return e.stock > 0;
  });
  console.log(paquetesDisponibles);

  const auth = getAuth();
  const user = auth.currentUser;
  useEffect(() => {
    if (user?.email !== undefined) {
      dispatch(loadCart(user?.email));
    }
  }, [user, dispatch]);

  useEffect(() => {
    !packages.length
      ? dispatch(getPackages())
      : !showPackages.length
      ? dispatch(getMainPackages())
      : console.log("hecho");
  }, [dispatch, packages, showPackages]);

  useEffect(() => {
    return () => {
      dispatch(getClean());
    };
  }, [dispatch]);

  console.log("show", showPackages);

  return (
    <>
      <div class="container cont-card">
        <h2 className="title-card-home">
          Elegi un paquete para comenzar tu aventura
        </h2>
        <div class="row g-3">
          {showPackages.length ? (
            showPackages.map((e) => {
              return (
                <div class="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                  <Link to={`/details/${e.id}`}>
                    <div class="card">
                      <img
                        class=" card-bodyhome"
                        src={e.city?.image}
                        alt="Card  cap"
                      />

                      <div class="card-body ">
                        <h5 class="card-title card-main c-name ">{e.name}</h5>
                        <p class="card-text card-main c-city ">
                          {e.city?.name}
                        </p>
                        <p class="card-text  card-main c-hotel card-p ">
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
            <div className="loader">
              {" "}
              <Loaderpag />{" "}
            </div>
          )}
        </div>
        <div class="btn-pack-home">
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
