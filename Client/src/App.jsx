
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/UserPages/Login';
import Register from './Pages/UserPages/Register';
import Products from './Pages/UserPages/Products';
import Invoice from './Pages/UserPages/Invoice';


import AllProducts from './Pages/AdminPages/AllProducts';
import AddProduct from './Pages/AdminPages/addProduct';


function App() {
  

  return (
    <>
    <Router>
      <Routes>

        
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/invoice' element={<Invoice/>}/>


        <Route path='/adminproducts' element={<AllProducts/>}/>
        <Route path='/adminaddproducts' element={<AddProduct/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
