import React, { useContext } from 'react';
import HomeBack from '../assets/Images/home_bg.jpg';
import heart from '../assets/Images/heart.png';
import shield from '../assets/Images/shield.jpeg';
import trust from '../assets/Images/trust.png';
import Footer from './Footer';
import './Home.css';

const Home = () => {

    return (
        <div className='home-container'>
            <div className='header-info'>
                <div className='info-item'>
                    <img src={heart} alt="Heart Icon" className="icon" />
                    <h4>Our Cotton is 100% Addictive</h4>
                </div>
                <div className='info-item'>
                    <img src={shield} alt="Shield Icon" className="icon" />
                    <h4>Risk-Free - Guaranted</h4>
                </div>
                <div className='info-item'>
                    <img src={trust} alt="Trust Icon" className="icon" />
                    <h4>Trusted products</h4>
                </div>
            </div>
            <div className='background-section'>
                <img src={HomeBack} alt="Background" className='background-img' />
                <div className='text-overlay'>
                    <h2>Don’t Miss Out: Our Best-Selling Cotton is Almost Gone!</h2>
                    <p>Our exclusive collections sell fast. Shop now to secure your favorite fabrics before they’re gone.</p>
                    <button className='cta-button'>Get Started</button>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Home;
