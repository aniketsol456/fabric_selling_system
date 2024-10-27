import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <>
      <div className='Container'>
        <Navbar/>
        <Routes>
        
        </Routes>
      </div>
      </>
    </BrowserRouter>
  )
}

export default App
