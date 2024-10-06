import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Navbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Portfolio from './components/Portfolio';


function Router() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Portfolio/>} /> 
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);

reportWebVitals();
