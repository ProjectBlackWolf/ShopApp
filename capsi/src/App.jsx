import './styles/App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Silas' Art Shop</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/add' element={<AddItem />} />
          <Route path='/buy' element={<BuyForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
