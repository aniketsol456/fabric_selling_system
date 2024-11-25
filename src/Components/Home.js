import React from 'react';
import HomeBack from '../assets/Images/home_bg.jpg';
import heart from '../assets/Images/heart.png';
import shield from '../assets/Images/shield.jpeg';
import trust from '../assets/Images/trust.png';
import linenImage from '../assets/Images/fabric3.webp';
import linenCottonImage from '../assets/Images/fabric1.webp';
import cottonImage from '../assets/Images/fabric2.webp';
import freeShipping from '../assets/Images/benefit-1.svg';
import easyReturns from '../assets/Images/benefit-2.svg';
import safeCheckout from '../assets/Images/benefit-3.svg';
import Footer from './Footer';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const goFabricCatalog = () => {
        navigate("/fabric");
    };

    return (
        <div className='home-container'>
            <div className='header-info'>
                <div className='info-item'>
                    <img src={heart} alt="Heart Icon" className="icon" />
                    <h4>Our Cotton is 100% Addictive</h4>
                </div>
                <div className='info-item'>
                    <img src={shield} alt="Shield Icon" className="icon" />
                    <h4>Risk-Free - Guaranteed</h4>
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
                    <button className='cta-button' onClick={goFabricCatalog}>Get Started</button>
                </div>
            </div>

            {/* //New Fabric Collection Section */}
            <div className='fabric-collection'>
                <h2 className="collection-title">Explore Our Curated Collection by Fabric Content: Find Your Perfect Match</h2>
                <p className="collection-subtitle">
                    Whether you're a seasoned designer, a crafting enthusiast, or someone embarking on a new DIY project, finding the right fabric has never been easier.
                </p>
                <div className='fabric-collection-grid'>
                    <div className='fabric-collection-item fabric-collection-item-large'>
                        <img src={linenImage} alt="Linen" className="collection-image" />
                        <button className='fabric-button' onClick={goFabricCatalog}>LINEN</button>
                    </div>
                    <div className='fabric-collection-item'>
                        <img src={linenCottonImage} alt="Linen/Cotton" className="collection-image" />
                        <button className='fabric-button' onClick={goFabricCatalog}>LINEN/COTTON</button>
                    </div>
                    <div className='fabric-collection-item'>
                        <img src={cottonImage} alt="Cotton" className="collection-image" />
                        <button className='fabric-button' onClick={goFabricCatalog}>COTTON</button>
                    </div>
                </div>
            </div>

            <div className='benefits-section'>
                <div className='benefit-item'>
                    <img src={freeShipping} alt="Free Shipping Icon" className="icon" />
                    <h4>Free Shipping On Orders Over $150</h4>
                </div>
                <div className='benefit-item'>
                    <img src={easyReturns} alt="Easy Returns Icon" className="icon" />
                    <h4>Easy Returns 30 Day Return Guarantee</h4>
                </div>
                <div className='benefit-item'>
                    <img src={safeCheckout} alt="Safe Checkout Icon" className="icon" />
                    <h4>Guaranteed Safe Checkout</h4>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    );
};

export default Home;
