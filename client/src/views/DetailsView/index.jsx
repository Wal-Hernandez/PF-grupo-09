import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Details from "../../components/Details";
import "./detailsView.css";

export default function DetailsView() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="detailsViewContainer">
        <div className="details-card-top">
          <Details />
        </div>
      </div>
      <div className="footerDiv">
        <Footer />
      </div>
    </>
  );
}
