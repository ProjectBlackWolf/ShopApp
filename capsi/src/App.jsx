import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Read from './routes/Read.jsx';
import Create from './routes/Create.jsx';
import Update from './routes/Update.jsx';
import ReadOne from './routes/ReadOne.jsx';
import Login from './Components/Login';
import Register from './Components/Register';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
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
              <Route path='/update' element={<Update />} />
              <Route path='/' element={<ReadOne />} />
              <Route path='/create' element={<Create/>}/>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    </>
  )
}

export default App;