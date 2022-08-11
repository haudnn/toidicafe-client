import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './config/RoutesConfig';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/> 
        <RoutesConfig />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
