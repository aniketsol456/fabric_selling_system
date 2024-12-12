import React from 'react';
import './Cart.css';
import { useCart } from './ContextProvider/Context';

const Cart = () => {
  const { cart, clearCart } = useCart(); 

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, fabric) => total + (fabric.price - (fabric.price * fabric.discount) / 100) * fabric.quantity,
      0
    ).toFixed(2);
  };
  
  const handleIncreaseQuantity = (fabric) => {
    fabric.quantity += 1;
    addToCart(fabric);
  };
  
  const handleDecreaseQuantity = (fabric) => {
    if (fabric.quantity > 1) {
      fabric.quantity -= 1;
      addToCart(fabric);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-main">
        <h2>Shopping Cart</h2>
        <button className="continue-shopping">Continue Shopping</button>
        
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
                    <button onClick={() => handleDecreaseQuantity(fabric)}>-</button>
                    <span>{fabric.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(fabric)}>+</button>
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
        <button className="checkout-button">PROCEED TO CHECKOUT</button>
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
