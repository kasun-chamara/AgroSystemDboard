import React, { useState } from "react";
import "./SideNavBar.css";

// Import Font Awesome icons
import { FaTachometerAlt, FaWarehouse, FaUserFriends, FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SideNavBar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState("dashboard");

  // State to toggle sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`sidebar-container ${isSidebarVisible ? "expanded" : "collapsed"}`}>
      {/* Sidebar */}
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