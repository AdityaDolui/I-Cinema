import React from 'react';
import logo from './logo.svg';
import Footer from './Component/Footer/Footer';
// import Header from './Component/Header/Header';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, BrowserRouter, Routes } from 'react-router-dom';
 import './App.css';
import DefaultLayout from './DefaultLayout/DefaultLayout';
import Home from './pages/Home'
import About from './pages/About';


function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
    <Route path='/' element={<DefaultLayout />}> {/* Default layout for most pages */}
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />}/>
         
        </Route>
        </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
