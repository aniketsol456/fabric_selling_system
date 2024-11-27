import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBoxes, faUsers, faTruck, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <h2 className="sidebar-title">Admin Dashboard</h2>
        <nav className="sidebar-nav">
          <NavLink to="/admin/orders" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faShoppingCart} /> Order Management
          </NavLink>
          <NavLink to="/admin/fabrics" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faBoxes} /> Fabric Management
          </NavLink>
          <NavLink to="/admin/users" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faUsers} /> User Management
          </NavLink>
          <NavLink to="/admin/suppliers" className="sidebar-link" activeClassName="active">
            <FontAwesomeIcon icon={faTruck} /> Supplier Management
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
