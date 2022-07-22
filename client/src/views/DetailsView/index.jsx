import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getPackageId } from "../../redux/actions/getPackageId";
import { getClean } from "../../redux/actions/getClean";
import "./detailsView.css";

export default function DetailsView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const packageDetail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getPackageId(id));
    dispatch(getClean());
  }, [dispatch, id]);

  console.log(packageDetail);

  return (
    <>
      <div>
        <Navbar />
      </div>
      {packageDetail ? (
        <div className="detailsViewContainer">
          <div>
            <div>
              <img
                src={packageDetail.hotel.urlImage}
                alt="Image not found"
                width="300px"
                height="300px"
              />
            </div>
            <div>Nombre: {packageDetail.name}</div>
          </div>
          <div>
            <div>Fecha salida: {packageDetail.start_date}</div>
            <div>Fecha llegada: {packageDetail.end_date}</div>
            <div>Resumen de lo que incluye: </div>
          </div>
          <div>
            <div>
              Coordenadas: {packageDetail.hotel.location[0]} -{" "}
              {packageDetail.hotel.location[1]}
            </div>
            <div>Hotel: {packageDetail.hotel.name}</div>
            <div>Actividad: {packageDetail.activity.name}</div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
}
