import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes }
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
          <Router>
            <Routes>
            <Route exact path="/" Component={Read} ></Route>
              <Route
                exact
                path='/invItem/:id/update'
                component={Update} 
              />
              <Route exact path='/invItem/:id' Component={ReadOne}>
            </Route>
            </Routes>
          </Router>
        </div>
      </ItemContextProvider>
    </>
    
  )
}

export default App;