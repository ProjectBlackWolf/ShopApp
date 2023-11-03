
import './styles/App.css';
import './styles/Navbar.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Mainpage from './Components/Mainpage';
import NavBar from './Components/NavBar';
import Update from './routes/Update.jsx';
import Welcome from './Components/Welcome';
import Create from './routes/Create';
import ReadOne from './routes/ReadOne';
import Cart from './routes/Cart';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

/*
{ <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
}
*/

function App() {
  const [selected, setSelected] = useState({});
  const [user, setUser] = useState({});
  return (
    <>
      <NavBar />
      <div className='container'>
      {/* as long as the context provider is outside the/a? browserRouter it will work*/}

        <Routes>
          <Route path='/:id/update' element={<Update />} />
          <Route path='/getAll' element={<Mainpage />} />
          <Route path='/' element={<Welcome/>}/>
          <Route path='/create' element={<Create />} />
          <Route path='/users' element={<Login/>}/>
          {/* <Route path='/buy' element={<BuyForm />} /> */}
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/show/:id' element={<ReadOne />} />
        </Routes>
      </div>
    </>
  )
}

export default App
