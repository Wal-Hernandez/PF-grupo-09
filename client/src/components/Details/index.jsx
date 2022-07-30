import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPackageId } from "../../redux/actions/getPackageId";
import { getClean } from "../../redux/actions/getClean";
import "./details.css";

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const packageDetail = useSelector((state) => state.detail);
  const packageActivity = [];
  packageDetail.activities?.map((e) => {
    packageActivity.push(
      <div>{e.name}</div>
    )
  })

  useEffect(() => {
    dispatch(getPackageId(id));
    dispatch(getClean());
  }, [dispatch, id]);

  console.log(packageDetail);

  return (
    <div class="card">
      <div>
        <div>
          <img
            class="card-img-top"
            src={packageDetail.hotel?.urlImage}
            alt="Image not found"
            width="300px"
            height="300px"
          />
        </div>
        <h5 class="card-title">Nombre: {packageDetail.name}</h5>
      </div>
      <div>
        <p class="card-text">Fecha salida: {packageDetail.start_date}</p>
        <p class="card-text">Fecha llegada: {packageDetail.end_date}</p>
        <p class="card-text">Resumen de lo que incluye: </p>
      </div>
      <div>
        <p class="card-text">
          Coordenadas: {packageDetail.hotel?.location[0]} -{" "}
          {packageDetail.hotel?.location[1]}
        </p>
        <p class="card-text">Hotel: {packageDetail.hotel?.name}</p>
        <p class="card-text">Actividad: {packageActivity}</p>
        <p class="card-text">Precio: ${packageDetail.price}</p>
      </div>
    </div>

  );
}
