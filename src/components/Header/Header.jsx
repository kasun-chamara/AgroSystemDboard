import React, { useState } from "react";
import "./Header.css";
import { FaBell, FaEnvelope, FaCaretDown, FaTimes, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import users from "../../mock/users"; // Import mock data

const Header = ({ isSidebarVisible }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Get the first user from the mock data
  const currentUser = users[0]; // Replace with logic to select the current user if needed

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={`header ${isSidebarVisible ? "with-sidebar" : "full-width"}`}>
      <div className="header-right">
        {/* Bell Icon with Green Dot */}
        <div className="icon-container">
          <FaBell className="header-icon" title="Notifications" />
          <span className="notification-dot"></span>
        </div>

        {/* Message Icon */}
        <FaEnvelope className="header-icon" title="Messages" />

        {/* Profile Section */}
        <div className="profile-section" onClick={toggleDropdown}>
          <img
            src={currentUser.profileImage} // Use profile image from mock data
            alt="User Profile"
            className="profile-image"
          />
          <span className="profile-name">Hi {currentUser.name}</span> {/* Use name from mock data */}
          <FaCaretDown className="dropdown-icon" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <span className="dropdown-title">User Profile</span>
            <button className="close-button" onClick={toggleDropdown}>
              <FaTimes />
            </button>
          </div>
          <div className="dropdown-content">
            <img
              src={currentUser.profileImage} // Use profile image from mock data
              alt="User Profile"
              className="dropdown-profile-image"
            />
            <span className="dropdown-profile-name">{currentUser.name}</span>
          </div>
          <div className="dropdown-actions">
            <button className="add-profile-button">
              <FaUserPlus className="action-icon" /> Add Profile
            </button>
            <button className="logout-button">
              <FaSignOutAlt className="action-icon" /> 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;