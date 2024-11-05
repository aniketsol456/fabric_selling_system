import React from 'react';
import { NavLink } from 'react-router-dom';
import errorphoto from '../assets/Images/404.svg';
import './Error.css';

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="error-container">
          <img src={errorphoto} alt="error" className="error-image" />
          {/* <h1 className="mb-3">404 ERROR </h1> */}
          <h2 className="error-heading">PAGE NOT FOUND</h2>
          <NavLink to="/" className="btn btn-primary error-button"> Back To Home Page </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
