import React from "react";
import "./Header.css";
import { FaBell, FaEnvelope, FaCaretDown } from "react-icons/fa";
import users from "../../mock/users"; // Import mock data

const Header = ({ isSidebarVisible }) => {
  // Get the first user from the mock data
  const currentUser = users[0]; // Replace with logic to select the current user if needed

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
        <div className="profile-section">
          <img
            src={currentUser.profileImage} // Use profile image from mock data
            alt="User Profile"
            className="profile-image"
          />
          <span className="profile-name">Hi {currentUser.name}</span> {/* Use name from mock data */}
          <FaCaretDown className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;