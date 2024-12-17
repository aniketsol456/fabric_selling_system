import React, { useState } from "react";
import './CheckoutForm.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const CheckoutForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cart = JSON.parse(queryParams.get('cart'));
  const userId = queryParams.get('userId');

  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    paymentMethod: "",
    phoneNumber: "",
    email: "",
  });


  const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[]\/\\+^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getCookie('usercookie');
  
    if (!Array.isArray(cart)) {
      console.error('Cart is not an array:', cart);
      alert('Invalid cart data. Please try again.');
      return;
    }

    // Calculate totalAmount based on cart items
    const totalAmount = cart.reduce((total, item) => {
      const price = item.price || 0; // Assuming 'price' is available for each item
      return total + price * item.quantity;
    }, 0);
  
    try {
      const orderData = {
        userId,
        items: cart.map(item => ({
          fabricId: item.fabricId?._id || item._id,
          quantity: item.quantity,
          price: item.price,
          discount: item.discount,
          finalPrice: ((item.price * item.discount) / 100).toFixed(2)
        })),
        shippingAddress: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: formData.country,
        },
        paymentMethod: formData.paymentMethod,
        email: formData.email,
        totalAmount,  
      };
  
      const response = await axios.post('http://localhost:8009/order/create', orderData, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (response.status === 201) {
        console.log('Order placed successfully:', response.data);
        alert('Order placed successfully!');
        clearCart();
        navigate('/');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  const clearCart = async () => {
    const token = getCookie('usercookie');
    const userId = getCookie('userid');
    try {
      const response = await axios.delete(`http://localhost:8009/cart/clear/${userId}`, {
        headers: { "Authorization": `Bearer ${token}` },
      });
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <div className="checkoutForm">
      <h1>Checkout Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Payment Method --</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
            <option value="UPI">UPI</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
