import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Get 150 off your first order!</h2>
        <div className="subscribe">
          <input type="email" placeholder="Enter your e-mail" />
          <button>Sign Me Up</button>
        </div>
        <p>*You may unsubscribe at any time. No spam, we promise!</p>
      </div>
      <div className="footer-main">
        <div className="footer-section">
          <h4>Services</h4>
          <p>Help Center</p>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Return Policy</p>
          <p>Accessibility Statement</p>
        </div>
        <div className="footer-section">
          <h4>Personalize</h4>
          <p>Account</p>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <p>Contact Us</p>
          <p>M-F 10:00-5:00 Pacific Time India</p>
          <p>+91 9054214277</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© FABRICO MART | All rights reserved</p>
        <div className="payment-methods">
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-apple-pay"></i>
          <i className="fab fa-cc-google-pay"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
