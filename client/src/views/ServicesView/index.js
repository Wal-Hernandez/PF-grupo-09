import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./servicesView.css";
import Productos from "../../components/Productos";
import Paginado from "../../components/Paginado";
import { useSelector } from "react-redux";
import Filters from "../../components/Filters";
import SearchAndFilters from '../../components/Search&Filters';
export default function Services({ userlog }) {
  const packages = useSelector((state) => state.packages);

  const [currentPage, setCurrentPage] = useState(1);
  const [packagesPerPage /*setPackagesPerPage*/] = useState(3); //10 productos por pagina
  const indexOfLastPackage = currentPage * packagesPerPage; // 10
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage; // 0
  const currentPackages = packages.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <Navbar setCurrentPage={setCurrentPage} userlog={userlog} />
      </div>
      <div className="servicesViewContainer">
        <div className="services-view-top">
          <b>Busqueda</b>
          <b>Matching de busqueda</b>
          <div>calendario</div>
        </div>
        <div>
          <b>
            <Filters setCurrentPage={setCurrentPage} />
          </b>
        </div>
        <div className="services-paginado-container">
          <Paginado
            currentPage={currentPage}
            packagesPerPage={packagesPerPage}
            packages={packages.length}
            paginado={paginado}
          />
        </div>
        <div className="services-product-container">
          <Productos currentPackages={currentPackages} />
        </div>
      </div>
      <div className="services-footer-container">
        <Footer />
      </div>
    </>
  );
}
