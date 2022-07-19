import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './views/Home';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details" element={<Details/>} />
    </Routes>
    </div>
  );
}

export default App;
