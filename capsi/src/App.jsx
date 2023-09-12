import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Read from './routes/Read.jsx'
import { ItemContextProvider } from './context/ItemContext';
import Update from './routes/Update';
import ReadOne from './routes/ReadOne';

function App() {
  return (
    <>
      <ItemContextProvider>
        <div className='container'>
          <Read/>
          {/* <Router>
            <Routes>
              <Route path='/' element={<Read/>}/>
              <Route
                path='/invItem/:id/update'
                element={<Update/>}
              />
              <Route path='/invItem/:id' element={<ReadOne/>}/>
            </Routes>
          </Router> */}
        </div>
      </ItemContextProvider>
    </>
    
  )
}

export default App;