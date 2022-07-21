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
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/details" element={<Details/>} />
      <Route path="/buy" element={<EditBuy/>} />
      <Route path="/editBuy" element={<Buy/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path ="/faq" element ={<FAQ/>}/>
    </Routes>
    </div>
  );
}

export default App;
