import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Details from "../../components/Details";
import "./detailsView.css";

export default function DetailsView({userlog}) {
  return (
    <>
      <div>
        <Navbar userlog={userlog}/>
      </div>
      <div className="detailsViewContainer">
        <div className="details-card-top">
          <Details userlog={userlog} />
        </div>
      </div>
      <div className="footerDiv">
        <Footer />
      </div>
    </>
  );
}
