import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./servicesView.css";
import Productos from "../../components/Productos";
import Paginado from "../../components/Paginado";
import { useSelector } from "react-redux";
import SearchAndFilters from '../../components/Search&Filters';
export default function Services({ userlog }) {
  const packages = useSelector((state) => state.rootReducer.packages);

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
     
        <Navbar setCurrentPage={setCurrentPage} userlog={userlog} />
      <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="row align-items-center">
          <div className="col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-sm-10 col-md-8 col-lg-12">
            <SearchAndFilters setCurrentPage={setCurrentPage}/>
          </div>
          <div className="col-sm-1 col-md-2 col-lg-3"></div>
        </div>
        <div className="row">
          <Paginado
            currentPage={currentPage}
            packagesPerPage={packagesPerPage}
            packages={packages.length}
            paginado={paginado}
          />
        </div>
            <div className="row">
              <Productos currentPackages={currentPackages} />
            </div>
          </div>
          <div className="row">
            <Footer />
          </div>
     </div>
    </>
  );
}
