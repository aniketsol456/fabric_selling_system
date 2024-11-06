import React from 'react';
import './Fabric_catalog.css';
import Linen1 from '../assets/Images/linen2.jpg';
import Linen2 from '../assets/Images/linen2.jpg';
import cotton1 from '../assets/Images/cotton1.jpg';

// Example data with prices in USD
const fabricData = [
  { id: 1, image: Linen1, name: 'Beet Red Linen', priceUSD: 16.89, discount: 10, originalPriceUSD: 18.77 },
  { id: 2, image: Linen2, name: 'Crystal Rose Linen', priceUSD: 16.89, discount: 10, originalPriceUSD: 18.77 },
  { id: 3, image: cotton1, name: 'Fiery Red Linen', priceUSD: 16.89, discount: 10, originalPriceUSD: 18.77 },
  // Add more items as needed
];

// Conversion rate
const USD_TO_INR = 83;

// Function to convert USD to INR
const convertToINR = (usd) => {
  return (usd * USD_TO_INR).toFixed(2); // Convert and format to 2 decimal places
};

const FabricCatalog = () => {
  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Cotton, Linen Fabric</h2>
      <div className="fabric-grid">
        {fabricData.map((fabric) => (
          <div key={fabric.id} className="fabric-card">
            <img src={fabric.image} alt={fabric.name} className="fabric-image" />
            <div className="fabric-info">
              <h3 className="fabric-name">{fabric.name}</h3>
              <div className="fabric-price">
                {/* Convert prices to INR and display */}
                <span className="discounted-price">₹{convertToINR(fabric.priceUSD)}</span>
                <span className="original-price">₹{convertToINR(fabric.originalPriceUSD)}</span>
                <span className="discount-badge">-{fabric.discount}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FabricCatalog;
