import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./homeView.css";
import HomeBody from "../../components/HomeBody";
import Carousel from "../../components/Carousel";

function HomeView() {
  return (<>
    <div>
      <Navbar />
    </div>
    <div>
      <Carousel />
      <HomeBody />
    </div>
    <div className="footerDiv">
      <Footer />
    </div>
  </>
  );
}

export default HomeView;
