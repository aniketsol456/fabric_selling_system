import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Error from './Components/Error';
import FabricCatalog from './Components/Fabric_catalog';
import Feedback from './Components/Feedback';
import Help_Center from './Components/Help_Center';
import Order from './Components/Order';
import Cart from './Components/Cart';
import Context from './Components/ContextProvider/Context'; // Import Context provider

const App = () => {
  return (
    <Context> {/* Wrap the entire app in Context */}
      <BrowserRouter>
        <div className='Container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/fabric' element={<FabricCatalog />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/order' element={<Order />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/helpcenter' element={<Help_Center />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Context>  
  );
};

export default App;
