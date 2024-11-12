import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-main">
        <h2>Shopping Cart</h2>
        <button className="continue-shopping">Continue Shopping</button>
        
        <div className="cart-items">
          <div className="cart-header">
            <span>Price</span>
            <span>Quantity</span>
          </div>
          <div className="cart-subtotal">
            <span>Subtotal: $0.00</span>
            <button className="clear-cart">Clear Cart</button>
          </div>
        </div>
      </div>
      
      <div className="cart-summary">
        <span className="summary-subtotal">Subtotal: $0.00</span>
        <button className="checkout-button">PROCEED TO CHECKOUT</button>
        <div className="summary-info">
          <p><i className="icon">🛍️</i> Exchanges & Easy Returns</p>
          <p><i className="icon">🔒</i> Fabrics-store.com has secure transactions</p>
          <p><i className="icon">✅</i> 100% satisfaction guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
