import React, { useEffect, useState } from 'react';
import './Order.css';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    

  const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[]\/\\+^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
  const userId = getCookie('userid');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:8009/order/user/${userId}`);
        setOrders(response.data.orders);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch orders');
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="order-container">
      <div className="order-header">
        <span>{orders.length} orders placed in</span>
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
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : orders.length === 0 ? (
          <p>No results found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="order-card">
              <h3>Order ID: {order._id}</h3>
              <p>Status: {order.status}</p>
              <p>Total Amount: ₹{order.totalAmount}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      <p>Fabric: {item.fabricId.name}</p> {/* Assuming fabricId has a name field */}
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{item.price}</p>
                      <p>Discount: ₹{item.discount}</p>
                      <p>Final Price: ₹{item.finalPrice}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
