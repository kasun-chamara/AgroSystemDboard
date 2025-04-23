import React, { useState } from "react";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`app-container ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
      <SideNavBar isSidebarVisible={isSidebarVisible} />
      <div className="main-content">
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
       
      </div>
    </div>
  );
};

export default App;