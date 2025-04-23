import React, { useState } from "react";
import "./SideNavBar.css";
import { FaTachometerAlt, FaWarehouse, FaUserFriends, FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SideNavBar = ({ isSidebarVisible, toggleSidebar, setActivePage }) => {
  const [activeLink, setActiveLink] = useState("dashboard");

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setActivePage(link); // Update the active page in App.jsx
  };

  return (
    <div className={`sidebar-container ${isSidebarVisible ? "expanded" : "collapsed"}`}>
      <div className="sidenav">
        <div className="company-name">Agro Dashboard</div>
        <ul className="nav-links">
          <li>
            <a
              href="#dashboard"
              className={activeLink === "dashboard" ? "active" : ""}
              onClick={() => handleLinkClick("dashboard")}
            >
              <FaTachometerAlt className="nav-icon" /> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#stock"
              className={activeLink === "stock" ? "active" : ""}
              onClick={() => handleLinkClick("stock")}
            >
              <FaWarehouse className="nav-icon" /> Stock
            </a>
          </li>
          <li>
            <a
              href="#farmers"
              className={activeLink === "farmers" ? "active" : ""}
              onClick={() => handleLinkClick("farmers")}
            >
              <FaUserFriends className="nav-icon" /> Farmers
            </a>
          </li>
          <li>
            <a
              href="#buyers"
              className={activeLink === "buyers" ? "active" : ""}
              onClick={() => handleLinkClick("buyers")}
            >
              <FaShoppingCart className="nav-icon" /> Buyers
            </a>
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarVisible ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </div>
  );
};

export default SideNavBar;