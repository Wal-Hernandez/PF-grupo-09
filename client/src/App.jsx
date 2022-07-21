import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './views/HomeView';
import Details from './views/DetailsView';
import EditBuy from './views/EditBuyView';
import Buy from './views/BuyView';
import Services from './views/ServicesView';
import Admin from './views/AdminView';
<<<<<<< HEAD
import Login from './views/LoginView';
import FAQ from './components/FAQ/FAQ.jsx'
=======
import LoginView from './views/LoginView';
import AboutView from './views/AboutView';

>>>>>>> 2e1712779c741a86a4cf7030fed6871d5c67252a
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginView/>}/>
      <Route path="/details" element={<Details/>} />
      <Route path="/buy" element={<EditBuy/>} />
      <Route path="/editBuy" element={<Buy/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/admin" element={<Admin/>} />
<<<<<<< HEAD
      <Route path ="/faq" element ={<FAQ/>}/>
=======
      <Route path="/about" element={<AboutView/>} />
>>>>>>> 2e1712779c741a86a4cf7030fed6871d5c67252a
    </Routes>
    </div>
  );
}
export default App;
