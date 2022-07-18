import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Example from './components/Example';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Example/>} />
    </Routes>
    </div>
  );
}

export default App;
