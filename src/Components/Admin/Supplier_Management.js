import React from 'react';
import './Supplier_Management.css';

const SupplierManagement = () => {
  return (
    <div className="management-container">
      <h2 className="management-title">Supplier Management</h2>
      <table className="management-table">
        <thead>
          <tr>
            <th>Supplier ID</th>
            <th>Name</th>
            <th>Fabric Supplied</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#S001</td>
            <td>ABC Fabrics</td>
            <td>Beet Red Linen</td>
            <td>9876543210</td>
          </tr>
          <tr>
            <td>#S002</td>
            <td>XYZ Linens</td>
            <td>Crystal Rose Linen</td>
            <td>9876543211</td>
          </tr>
          <tr>
            <td>#S003</td>
            <td>PQR Supplies</td>
            <td>Fiery Red Linen</td>
            <td>9876543212</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SupplierManagement;
