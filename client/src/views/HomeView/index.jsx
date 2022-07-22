import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./homeView.css";
import HomeBody from "../../components/HomeBody";
import Carousel from "../../components/Carousel";

function HomeView() {
  return (
  <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
    <div>
    <HomeBody/>
    </div>
      <div>
        <Footer />
      </div>
      </>
  );
}

export default HomeView;
