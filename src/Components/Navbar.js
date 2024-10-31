import React, { useState } from 'react';
import Main_logo from '../assets/Images/logo_1.png';
import Search_logo from '../assets/Images/search_2.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [navClassName, setNavClassName] = useState('navClassName');

  const toggleMenu = () => {
    setNavClassName(navClassName === 'navClassName' ? 'navClassName responsive' : 'navClassName');
  };

  const openCartPage = () => { // Function to handle navigation to the Cart page
    navigate('/cart'); // Use navigate to change route
  };

  const openProfile = () => {
    navigate('/profile');
  };

  return (
    <div className='Navbar'>
      <div className='Navlogo'>
        <img src={Main_logo} alt='logo' />
      </div>
      <div className={navClassName}>
        <ul>
          <a href='/'>Home</a>
          <a href='/fabric'>Fabric Catalog</a>
          <a href='/contact'>Contact Us/Help</a>
          <a href='/feedback'>Feedback/Review</a>
          <a href='/order'>Orders</a>
          <a href='/login'>Login/Signup</a>
        </ul>
      </div>
      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} onClick={openCartPage} className='cartIcon' />
      </div>
      <div className='searchBox'>
        <input type="text" placeholder='Search' />
        <img src={Search_logo} alt="Search" />
      </div>
      <div className="profile">
        <Avatar onClick={openProfile} style={{background : "white", color :"black"}}>A</Avatar>
        {/* <FontAwesomeIcon icon={faUser} onClick={openProfile} className='ProfileIcon' /> */}
      </div>
      <div className="barIcon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
