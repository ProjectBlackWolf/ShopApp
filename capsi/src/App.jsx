import './styles/App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './routes/Read.jsx';
import Create from './routes/Create.jsx';
import Update from './routes/Update.jsx';
import ReadOne from './routes/ReadOne.jsx';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cart from './routes/Cart';
import BuyForm from './Components/BuyForm';
import THANKS from './Components/THANKS';
function App() {
  // load the ids from the database in the update and create pages.
  // using fetch from props or destructuring.
  
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/getAll' element={<Read />} />
          <Route path='/:id/update' element={<Update />} />
          <Route path='/show/:id' element={<ReadOne />} />
          <Route path='/create' element={<Create />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/buy' element={<BuyForm/>}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/THANKS' element={<THANKS/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;