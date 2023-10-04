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
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App;