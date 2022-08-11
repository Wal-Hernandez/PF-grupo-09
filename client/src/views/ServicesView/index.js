import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./servicesView.css";
import Productos from "../../components/Productos";
import Paginado from "../../components/Paginado";
import { useDispatch, useSelector } from "react-redux";
import SearchAndFilters from "../../components/Search&Filters";
import { getCities } from "../../redux/actions/getCities";
import { getActivities } from "../../redux/actions/getActivities";
import { getPackages } from "../../redux/actions/getPackages";
import { getClean } from "../../redux/actions/getClean";

export default function Services({ userlog }) {
  const packages = useSelector((state) => state.rootReducer.packages);
  const dispatch = useDispatch();
  const paquetesDisponibles = packages?.filter((e) => {
    return e.stock > 0 && e.enabled;
  });

  /*   paquetesDisponibles?.sort(function (a, b) {
    if (a.start_date > b.start_date) {
      return 1;
    }
    if (a.start_date < b.start_date) {
      return -1;
    }

    return 0;

  }); */

  useEffect(() => {
    dispatch(getCities());
    dispatch(getActivities());
    dispatch(getPackages());

    return () => {
      dispatch(getClean());
    };
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [packagesPerPage, setPackagesPerPage] = useState(4); //10 productos por pagina
  const indexOfLastPackage = currentPage * packagesPerPage; // 10
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage; // 0
  const currentPackages = paquetesDisponibles.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} userlog={userlog} />
      <div className="container-services">
        <div className="searchContainer">
          <SearchAndFilters setCurrentPage={setCurrentPage} />
        </div>

        <div className="cardConatinerServices">
          <div>
            <Productos currentPackages={currentPackages} />
          </div>
          <div className="paginadoservices">
            <Paginado
              currentPage={currentPage}
              packagesPerPage={packagesPerPage}
              packages={packages.length}
              paginado={paginado}
            />
          </div>
        </div>
      </div>

      <div className="fotservices">
        <Footer />
      </div>
    </>
  );
}
