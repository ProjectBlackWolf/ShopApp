import React from 'react';
import Header from '../Components/Header';
import Mainpage from '../Components/Mainpage';
import Cartpage from '../Components/Cartpage';

// This will be the home where the get all request will be made
// and the Home page will be rendered
const Read = () => {
  return (
    <div>
      <Header />
      <Mainpage />
      <Cartpage/>
    </div>
    

  )
}

export default Read