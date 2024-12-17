import React, { useState, useEffect } from 'react';
import './Cart.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState('');

  const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[]\/\\+^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  const fetchCart = async () => {
    const token = getCookie('usercookie');
    const userId = getCookie('userid');
    try {
      const response = await axios.get(`http://localhost:8009/cart/${userId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setCart(response.data.cart.items);
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const handleUpdateQuantity = async (fabric, newQuantity) => {
    const token = getCookie('usercookie');
    const userId = getCookie('userid');
    
    if (newQuantity < 1) {
      clearCart();
      return;
    }
    
    try {
      const fabricId = fabric.fabricId?._id || fabric._id; 
      console.log('Updating quantity for fabric:', fabricId);
      
      const response = await axios.patch(
        `http://localhost:8009/cart/update/${userId}/${fabricId}`,
        { quantity: newQuantity },
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      if (response.status === 200) {
        fetchCart();
      }
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };
  


  const clearCart = async () => {
    const token = getCookie('usercookie');
    const userId = getCookie('userid');
    try {
      const response = await axios.delete(`http://localhost:8009/cart/clear/${userId}`, {
        headers: { "Authorization": `Bearer ${token}` },
      });
      if (response.status === 200) {
        setCart([]); // Clear local cart
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, fabric) =>
        total + (fabric.price - (fabric.price * fabric.discount) / 100) * fabric.quantity,
      0
    ).toFixed(2);
  };

  useEffect(() => {
    const userIdFromCookie = getCookie('userid');
    setUserId(userIdFromCookie);
    fetchCart();
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-main">
        <h2>Shopping Cart</h2>
        <button className="continue-shopping" onClick={() => navigate('/catalog')}>Continue Shopping</button>

        <div className="cart-items">
          {cart.length > 0 ? (
            <>
              <div className="cart-header">
                <span>Price</span>
                <span>Quantity</span>
              </div>
              {cart.map((fabric, index) => (
                <div key={index} className="cart-item">
                  <span>{fabric.name}</span>
                  <span>₹{(fabric.price - (fabric.price * fabric.discount) / 100).toFixed(2)}</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleUpdateQuantity(fabric, fabric.quantity - 1)}>-</button>
                    <span>{fabric.quantity}</span>
                    <button onClick={() => handleUpdateQuantity(fabric, fabric.quantity + 1)}>+</button>
                  </div>
                </div>
              ))}
              <div className="cart-subtotal">
                <span>Subtotal: ₹{calculateSubtotal()}</span>
                <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>

      <div className="cart-summary">
        <span className="summary-subtotal">Subtotal: ₹{calculateSubtotal()}</span>
        <button
          className="checkout-button"
          onClick={() => {
            if (cart.length > 0) {
              navigate(`/checkout?cart=${JSON.stringify(cart)}&userId=${userId}`);
            } else {
              alert('Your cart is empty.');
            }
          }}
        >
  PROCEED TO CHECKOUT
</button>

        <div className="summary-info">
          <p><i className="icon">🛍️</i> Exchanges & Easy Returns</p>
          <p><i className="icon">🔒</i> Secure transactions</p>
          <p><i className="icon">✅</i> 100% satisfaction guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
