import { Routes, Route, } from 'react-router-dom';
// import { useState, useContext } from 'react';
import styled from 'styled-components';
import Mainpage from './Components/Mainpage';
import NavBar from './Components/NavBar';
import Update from './routes/Update.jsx';
import Welcome from './Components/Welcome';
import Create from './routes/Create';
import ReadOne from './routes/ReadOne';
import Cart from './routes/Cart';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { Checkout } from './Components/Checkout';
// import UserContext from './context/UserContext.jsx'
/*
{ <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
}
*/
const NavbarS = styled.span`
list-style-type: none;
    display: absolute;
    align-self: center;
    justify-content: space-between;
    margin: 0;
    padding: 0px 100px;
    background-color: #1a1a1a;
    z-index: 0;
    border: 2px solid #9cd4ff;
    box-shadow: #95c5ff 0px 0px 10px 0px;
    bottom: 100%;
`;

// const MUIETyp = styled.div`
//     img: width: 100px;
//     div: width: fit-content;
//     text-align: space-between;
//     html: font-family: Roboto, Helvetica, Arial;
//     html: font-size: 23px;
//     color: #A0ADDD;
//     h2: font-size: 50px;
//     background-color: #0D4DDD;
//     border: 2px solid #9cd4ff;
//     border-radius: 10px;
// `;

// const Container = styled.div`
//     text-align: center;
// `;

// const tempUser = {
//   id: 0, us: "Sol@ZeroAdmin", pw: "ItmContextZX0", isLogin: true
// };

// let PUID = tempUser.id;

function App() {
  // const { user, setUser } = useContext(UserContext);
  // const [selected, setSelected] = useState({});
  // const [userS, setUserS] = useState({});
  return (
    <>
      <NavbarS/>
      <NavbarS /><NavbarS><NavbarS />
        <NavBar />
        <NavbarS /></NavbarS><NavbarS /><NavbarS />
      <div className='container'>
        {/* as long as the context provider is outside the/a? browserRouter it will work*/}

        <Routes>
          <Route path='/:id/update' element={<Update />} />
          <Route path='/getAll' element={<Mainpage />} />
          <Route path='/' element={<Welcome />} />
          <Route path='/create' element={<Create />} />
          <Route path='/users' element={<Login />} />
          <Route path='/buy' element={<Checkout />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart/:id' element={<Cart />} />
          <Route path='/show/:id' element={<ReadOne />} />
        </Routes>
      </div>
    </>
  )
}

export default App
