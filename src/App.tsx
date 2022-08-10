import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './config/RoutesConfig';
import Header from './components/Common/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/> 
        <RoutesConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
