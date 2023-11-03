import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ItemContextProvider } from './context/ItemContext.jsx';
import  UserContextProvider  from './context/UserContext.jsx';
import  OrderContextProvider  from './context/OrderContext.jsx';
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <OrderContextProvider>
          <ItemContextProvider>
            <App />
          </ItemContextProvider>
        </OrderContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
