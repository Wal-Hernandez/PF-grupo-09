import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './views/HomeView';
import Details from './views/DetailsView';
import EditBuy from './views/EditBuyView';
import Buy from './views/BuyView';
import Services from './views/ServicesView';
import Admin from './views/AdminView';
import Login from './views/LoginView';
import FAQ from './components/FAQ/FAQ.jsx'
import LoginView from './views/LoginView';
import AboutView from './views/AboutView';
import {PutCityForm} from './views/AdminView/Forms/PutCityForm';
import {PutBusForm} from './views/AdminView/Forms/PutBusForm';
import {PutHotelForm} from './views/AdminView/Forms/PutHotelForm';
import {PutActivityForm} from './views/AdminView/Forms/PutActivityForm';
import {PutPlatformForm} from './views/AdminView/Forms/PutPlatformForm';
import {PutPackageForm} from './views/AdminView/Forms/PutPackageForm'
import {CreateForm} from './views/AdminView/Forms/CreateForm'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginView/>}/>
      <Route path="/details/:id" element={<Details/>} />
      <Route path="/buy" element={<EditBuy/>} />
      <Route path="/editBuy" element={<Buy/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path ="/faq" element ={<FAQ/>}/>
      <Route path="/about" element={<AboutView/>} />
      <Route path="/admin/PutCityForm/:id" element ={<PutCityForm/>}/>
      <Route path="/admin/create" element ={<CreateForm/>}/>
      <Route path="/admin/edit/business/:id" element ={<PutBusForm/>}/>
      <Route path="/admin/edit/activities/:id" element ={<PutActivityForm/>}/>
      <Route path="/admin/edit/packages/:id" element ={<PutPackageForm/>}/>
      <Route path="/admin/edit/hotels/:id" element ={<PutHotelForm/>}/>
      <Route path="/admin/edit/cities/:id" element ={<PutCityForm/>}/>
      <Route path="/admin/edit/plattforms/:id" element ={<PutPlatformForm/>}/>
    </Routes>
    </div>
  );
}
export default App;