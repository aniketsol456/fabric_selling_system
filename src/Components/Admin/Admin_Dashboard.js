import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";
import OrderManagement from "../Admin/Order_Management";
import FabricManagement from "../Admin/Fabric_Management";
import UserManagement from "../Admin/User_Management";
import SupplierManagement from "../Admin/Supplier_Management";
import "./Admin_Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <Routes>
          <Route path="/admin/orders_manage" element={<OrderManagement />} />
          <Route path="/admin/fabrics" element={<FabricManagement />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/suppliers" element={<SupplierManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
