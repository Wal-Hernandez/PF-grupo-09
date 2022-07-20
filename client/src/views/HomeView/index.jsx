import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./homeView.css";
import { Link } from "react-router-dom";
function HomeView() {
  return (
  <>
      <div>
        <Navbar />
      </div>
      <div className="homeViewContainer">
        <div><h1>Ofertas</h1></div>
        <div>
          <h1>Paquetes</h1>
          <Link to="/details">
            <h2 className="example">Paquete de ejemplo</h2>
          </Link>
          <Link to="/details">
            <h2 className="example2">Paquete de ejemplo</h2>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      </>
  );
}

export default HomeView;
