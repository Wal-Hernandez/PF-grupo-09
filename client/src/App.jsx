import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './views/HomeView';
import Details from './views/DetailsView';
import EditBuy from './views/EditBuyView';
import Buy from './views/BuyView';
import Services from './views/ServicesView';
import Admin from './views/AdminView';
//import Login from './views/LoginView';
import FAQ from './components/FAQ/FAQ.jsx'
import LoginView from './views/LoginView';
import AboutView from './views/AboutView';
import {PutCityForm} from './views/AdminView/Forms/PutCityForm';
import {PutBusForm} from './views/AdminView/Forms/PutBusForm';
import {PutHotelForm} from './views/AdminView/Forms/PutHotelForm';
import {PutActivityForm} from './views/AdminView/Forms/PutActivityForm';
import {PutPlatformForm} from './views/AdminView/Forms/PutPlatformForm';
import {PutPackageForm} from './views/AdminView/Forms/PutPackageForm'
import {CreateForm} from './views/AdminView/Forms/CreateForm';
//import{Login} from './components/Login/Login'
import{Alert} from './components/Login/Login'
import{Home2} from './components/Login/Home2'
import{Register} from './components/Login/Register'
import{Login} from './components/Login/Login'
import { ProtectedRouted } from "./components/Login/ProtectedRouted";

import { AuthProvider } from "./context/context";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from './Firebase/firebase-config';

import {firestore} from "./context/context"

function App() {
 
  


  return (
    <div className="App">
     <AuthProvider>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<LoginView/>}/>
       <Route path="/details/:id" element={<Details/>} />
       <Route path="/buy" element={<EditBuy/>} />
       <Route path="/editBuy" element={<Buy/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/admin" element={<ProtectedRouted><Admin/></ProtectedRouted>} />
       <Route path ="/faq" element ={<FAQ/>}/>
       <Route path="/about" element={<AboutView/>} />
       <Route path="/admin/PutCityForm/:id" element ={<PutCityForm/>}/>
       <Route path="/admin/create" element ={<CreateForm/>}/>
       <Route path="/admin/edit/buses/:id" element ={<PutBusForm/>}/>
       <Route path="/admin/edit/activities/:id" element ={<PutActivityForm/>}/>
       <Route path="/admin/edit/packages/:id" element ={<PutPackageForm/>}/>
       <Route path="/admin/edit/hotels/:id" element ={<PutHotelForm/>}/>
       <Route path="/admin/edit/cities/:id" element ={<PutCityForm/>}/>
       <Route path="/admin/edit/plattforms/:id" element ={<PutPlatformForm/>}/>
       <Route path ="/reg" element ={<Register/>}/>
       <Route path ="/log" element ={<Login/>}/>
       <Route path ="/home2" element ={<ProtectedRouted><Home2 /></ProtectedRouted>}/>
     </Routes>
     </AuthProvider>
    
    
    </div>
  );
}
export default App;