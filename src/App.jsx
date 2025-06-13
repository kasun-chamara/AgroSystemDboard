import React, { useState } from "react";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Header from "./components/Header/Header";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent"; // Import the Dashboard component
import Farmers from "./components/Farmers/Farmers"; // Import the Farmers component
import Buyers from "./components/Buyers/Buyers"; // Import Buyers component
import Stock from "./components/Stock/Stock";
import "./App.css";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [activePage, setActivePage] = useState("dashboard"); // Track the active page

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`app-container ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
      <SideNavBar
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
        setActivePage={setActivePage} // Pass setActivePage to SideNavBar
      />
      <div className="main-content">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="content">
          {activePage === "dashboard" && <DashboardComponent />} {/* Render Dashboard */}
          {activePage === "farmers" && <Farmers />} {/* Render Farmers */}
          {activePage === "buyers" && <Buyers />} {/* Render Buyers */}
          {activePage === "stock" && <Stock />}
        </div>
      </div>
    </div>
  );
};

export default App;





