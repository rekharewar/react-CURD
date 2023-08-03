import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {
  return (
   <>
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="about" element={< About/>}/>
        <Route path="ContactUs" element={< ContactUs/>}/> 
        
      </Routes> 
   
   
   </BrowserRouter>
   </>
  );
}

export default App;
