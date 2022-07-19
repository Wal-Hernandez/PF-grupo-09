import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './views/HomeView';
import Details from './views/DetailsView';
import EditBuy from './views/EditBuyView';
import Buy from './views/BuyView';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details" element={<Details/>} />
      <Route path="/buy" element={<EditBuy/>} />
      <Route path="/editBuy" element={<Buy/>} />
    </Routes>
    </div>
  );
}

export default App;
