import React, { useState } from 'react';
import Main_logo from '../assets/Images/logo_1.png';
import Search_logo from '../assets/Images/search_2.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const navigate = useNavigate();
  const [navClassName, setNavClassName] = useState('navClassName');

  const toggleMenu = () => {
    setNavClassName(navClassName === 'navClassName' ? 'navClassName responsive' : 'navClassName');
  };

  const openCartPage = () => {
    navigate('/cart');
  };

  const openProfile = () => {
    navigate('/profile');
  };

  // Get cookie value by name
  const getCookie = (name) => {
    const cookieString = `; ${document.cookie}`;
    const parts = cookieString.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    return undefined;
  };

  const handleLogout = () => {

    document.cookie = `usercookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    navigate('/login');
  };

  const isLoggedIn = getCookie('usercookie');
  return (
    <div className='Navbar'>
      <div className='Navlogo'>
        <img src={Main_logo} alt='logo' />
      </div>
      <div className={navClassName}>
        <ul>
          <a href='/'>Home</a>
          <a href='/fabric'>Fabric Catalog</a>
          <a href='/helpcenter'>Contact Us/Help</a>
          <a href='/feedback'>Feedback/Review</a>
          <a href='/order'>Orders</a>
          {/* Conditional Rendering for Login/Logout */}
          {isLoggedIn ? (
            <a href='#' onClick={handleLogout}>Logout</a> // Show Logout if user is logged in
          ) : (
            <a href='/login'>Login/Signup</a> // Show Login if user is not logged in
          )}
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
        {isLoggedIn ? (
          <Avatar onClick={openProfile} style={{ background: "white", color: "black" }}>A</Avatar>
        ) : (
          <FontAwesomeIcon icon={faUser} onClick={openProfile} className='ProfileIcon' />
        )}
      </div>
      <div className="barIcon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
