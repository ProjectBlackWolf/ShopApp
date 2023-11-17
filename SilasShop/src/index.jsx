import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ItemContextProvider } from './context/ItemContext.jsx';
import  UserContextProvider  from './context/UserContext.jsx';
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ItemContextProvider>
            <App />
          </ItemContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
