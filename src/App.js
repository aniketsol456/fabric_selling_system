import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <>
      <div className='Container'>
        <Navbar/>
        <Routes>
          <Route exact path='/login' element = {<Login/>}/>
          <Route exact path='/register' element = {<Register/>}/>
        </Routes>
      </div>
      </>
    </BrowserRouter>
  )
}

export default App
