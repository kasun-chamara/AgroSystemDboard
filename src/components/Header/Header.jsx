import React from "react";
import "./Header.css";
import { FaBell, FaEnvelope } from "react-icons/fa";

const Header = ({ isSidebarVisible }) => {
  return (
    <div className={`header ${isSidebarVisible ? "with-sidebar" : "full-width"}`}>
      <div className="header-right">
        <FaBell className="header-icon" title="Notifications" />
        <FaEnvelope className="header-icon" title="Messages" />
        <img
          src="https://via.placeholder.com/40" // Replace with the actual profile image URL
          alt="User Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Header;