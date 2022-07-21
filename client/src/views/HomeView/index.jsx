import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./homeView.css";
import HomeBody from "../../components/homeBody";


function HomeView() {
  return (
  <>
      <div>
        <Navbar />
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
