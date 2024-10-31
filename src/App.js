import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <>
      <div className='Container'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/login' element = {<Login/>}/>
          <Route exact path='/register' element = {<Register/>}/>
        </Routes>
        <Footer/>
      </div>
      </>
    </BrowserRouter>
  )
}

export default App
