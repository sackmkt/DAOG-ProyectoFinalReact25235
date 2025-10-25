// import { useState } from 'react'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import Home from './pages/home';
import Productos from './pages/Productos';
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Categoria from './pages/Categoria';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Categoria' element={<Categoria/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
