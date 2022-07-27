import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./homeView.css";
import HomeBody from "../../components/HomeBody";
import Carousel from "../../components/Carousel";
import { useAuth } from "../../context/AuthContext";
import { ProviderId } from "firebase/auth";


function HomeView() {
const  {user} = useAuth()


let mail = undefined
if(user){

mail = JSON.parse(JSON.stringify(user.email))}

  return (<>
    <div>
      <Navbar />
    </div>{
      user?<h1>{mail}</h1>: null}
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
