import React from 'react';
import './User_Management.css';

const UserManagement = () => {
  return (
    <div className="management-container">
      <h2 className="management-title">User Management</h2>
      <table className="management-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#001</td>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Customer</td>
          </tr>
          <tr>
            <td>#002</td>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>Customer</td>
          </tr>
          <tr>
            <td>#003</td>
            <td>Admin</td>
            <td>admin@example.com</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
