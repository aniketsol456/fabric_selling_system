import React from 'react';
import './Order.css';

const Order = () => {
  return (
    <div className="order-container">
      <div className="order-header">
        <span>0 orders placed in</span>
        <select>
          <option>All Time</option>
          <option>1 month ago</option>
          <option>2 month ago</option>
          <option>3 month ago</option>
          {/* Add more time filter options if needed */}
        </select>
      </div>
      <div className="order-details">
        <h2>Order Details</h2>
        <p>No results found.</p>
      </div>
    </div>
  );
};

export default Order;
