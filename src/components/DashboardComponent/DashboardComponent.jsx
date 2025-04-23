import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Import calendar icon
import "./DashboardComponent.css";

const DashboardComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      {/* Green Gradient Section */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard Details</h1>
          <div className="date-time">
            <FaCalendarAlt className="calendar-icon" /> {/* Calendar Icon */}
            <span>{currentTime.toLocaleDateString()}</span>
            <span className="separator">|</span> {/* Separator */}
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
        </div>
        <p>This is the dashboard content area. Add your dashboard details here.</p>
      </div>

      {/* Cards Section */}
      <div className="dashboard-cards">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
        <div className="card">Card 4</div>
      </div>
    </>
  );
};

export default DashboardComponent;