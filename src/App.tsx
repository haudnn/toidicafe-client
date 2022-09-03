import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './config/RoutesConfig';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Auth from './features/auth/pages/Auth';
import { useAppSelector } from './app/hooks';
import NavigateSetter from './components/Common/NavigateSetter.js';

function App() {
  const isShowAuthForm = useAppSelector((state) => state.auth.isShowAuthForm);
  return (
    <div className="App">
      <BrowserRouter>
        <NavigateSetter />
        <Header />
        <RoutesConfig />
        <Footer />
        {isShowAuthForm && < Auth />}
      </BrowserRouter>
    </div>
  );
}

export default App;
