import React, { useState, useEffect } from 'react';
import './Fabric_catalog.css';
import axios from 'axios';

// Conversion rate
const USD_TO_INR = 83;

// Function to convert USD to INR
const convertToINR = (usd) => {
  return (usd * USD_TO_INR).toFixed(2); // Convert and format to 2 decimal places
};

const FabricCatalog = () => {
  const [fabricList, setFabricList] = useState([]); // State to store fabric data
  const [filters, setFilters] = useState({
    color: '',
    type: '',
    weight: '',
    content: '',
    width: '',
    design: '',
    onSale: false,
  });

  useEffect(() => {
    // Fetch fabric data from the API
    const fetchFabrics = async () => {
      try {
        const response = await axios.get('http://your-backend-url/fabric/all', {
          // You may need to add headers, including authorization if needed
        });
        setFabricList(response.data.fabrics); // Assuming the response contains a 'fabrics' field
      } catch (error) {
        console.error('Error fetching fabric data:', error);
      }
    };

    fetchFabrics(); // Call the function to fetch fabric data
  }, []); // Empty dependency array means it runs once when the component mounts

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Filter fabric data - Apply filters if they are set, otherwise show all fabrics
  const filteredData = fabricList.filter((fabric) => {
    // If no filters are set, return all fabrics
    const noFiltersSet = Object.values(filters).every((val) => val === '' || val === false);
    
    if (noFiltersSet) {
      return true; // Return all fabrics when no filters are set
    }

    // Apply the filters to the fabric data
    return (
      (!filters.color || fabric.color === filters.color) &&
      (!filters.type || fabric.type === filters.type) &&
      (!filters.weight || fabric.weight === filters.weight) &&
      (!filters.content || fabric.content === filters.content) &&
      (!filters.width || fabric.width === filters.width) &&
      (!filters.design || fabric.design === filters.design) &&
      (!filters.onSale || fabric.onSale === filters.onSale)
    );
  });

  // Handle Add to Cart logic
  const handleAddToCart = (fabric) => {
    alert(`${fabric.name} added to cart!`);
    // Implement your cart logic here, e.g., save to localStorage or update state
  };

  return (
    <div className="catalog-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Filters</h3>
        <div className="filter-group">
          <label>Color</label>
          <select name="color" value={filters.color} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Red">Red</option>
            <option value="Pink">Pink</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Type</label>
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Linen">Linen</option>
            <option value="Cotton">Cotton</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Weight</label>
          <select name="weight" value={filters.weight} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Lightweight">Lightweight</option>
            <option value="Mediumweight">Mediumweight</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Fabric Content</label>
          <select name="content" value={filters.content} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="100% Linen">100% Linen</option>
            <option value="Cotton Blend">Cotton Blend</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Width</label>
          <select name="width" value={filters.width} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="54 inches">54 inches</option>
            <option value="44 inches">44 inches</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Design</label>
          <select name="design" value={filters.design} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Plain">Plain</option>
            <option value="Floral">Floral</option>
            <option value="Printed">Printed</option>
          </select>
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              name="onSale"
              checked={filters.onSale}
              onChange={handleFilterChange}
            />
            On Sale
          </label>
        </div>
      </aside>

      {/* Catalog */}
      <main className="catalog-container">
        <h2 className="catalog-title">All Fabric</h2>
        <div className="fabric-grid">
          {filteredData.map((fabric) => (
            <div key={fabric.id} className="fabric-card">
              <img src={fabric.image} alt={fabric.name} className="fabric-image" />
              <div className="fabric-info">
                <h3 className="fabric-name">{fabric.name}</h3>
                <div className="fabric-price">
                  <span className="discounted-price">₹{convertToINR(fabric.priceUSD)}</span>
                  <span className="original-price">₹{convertToINR(fabric.originalPriceUSD)}</span>
                  <span className="discount-badge">-{fabric.discount}%</span>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(fabric)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          {filteredData.length === 0 && <p>No fabrics match your filters.</p>}
        </div>
      </main>
    </div>
  );
};

export default FabricCatalog;
