import './styles/App.css';
import React from 'react';
import { useState } from 'react';
import Authenticate from './Components/Authentication';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './routes/Read.jsx';
// import Update from './routes/Update.jsx';
// import ReadOne from './routes/ReadOne.jsx';
import ItemContextProvider from './context/ItemContext';
import Login from './Components/Login';

function App() {
  const [token, setToken] = useState(null);
  return (

    <>
      {/* find a way to move ItemContextProvider into its own if this doesn't work. */}
      <ItemContextProvider>
        <div className='container'>
          <Router>
            <Routes>
              <Route path='/getAll' element={<Read />} />
              <Route path='/login' element={<Login />} />
              <Route path='/auth' element={<Authenticate token={token} setToken={setToken} />} />
              <Route path='/' element={<SignUp setToken={setToken} />} />
            </Routes>
          </Router>
        </div>
      </ItemContextProvider>
    </>
  )
}

export default App;