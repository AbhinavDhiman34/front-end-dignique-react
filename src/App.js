import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Loginsignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory category="mens" />} />
          <Route path='/womens' element={<Shopcategory category="womens" />} />
          <Route path='/kids' element={<Shopcategory category="kids" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
