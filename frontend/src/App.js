import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route } from "react-router-dom";
import API from './pages/API';
import NotFound from './pages/NotFound';
import { Routes } from 'react-router-dom';



function App() {
  return (  
  
    <div className="App">             
        <img src={logo} className="App-logo" alt="logo" />
           
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/API" element={<API />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>          
               
    </div>
   
  );
}

export default App;
