// import { useState } from 'react'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      {/* <BrowserRouter> */}
      <Header/>
      {/* </BrowserRouter> */}
      <Footer/>
    </div>
  )
}

export default App
