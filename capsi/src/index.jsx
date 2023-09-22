import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './styles/index.css';
import ItemContextProvider from './context/ItemContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemContextProvider>
        <App />
      </ItemContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
