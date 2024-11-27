import React from 'react';
import './Fabric_Management.css';

const OrderManagement = () => {
  return (
    <div className="management-container">
      <h2 className="management-title">Order Management</h2>
      <table className="management-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Fabric</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#001</td>
            <td>John Doe</td>
            <td>Beet Red Linen</td>
            <td>Delivered</td>
            <td>₹10,000</td>
          </tr>
          <tr>
            <td>#002</td>
            <td>Jane Smith</td>
            <td>Crystal Rose Linen</td>
            <td>Pending</td>
            <td>₹8,000</td>
          </tr>
          <tr>
            <td>#003</td>
            <td>Mark Lee</td>
            <td>Fiery Red Linen</td>
            <td>Shipped</td>
            <td>₹6,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
