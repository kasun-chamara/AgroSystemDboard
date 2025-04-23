import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaAppleAlt, FaCarrot, FaLemon, FaSeedling, FaArrowUp, FaArrowDown } from "react-icons/fa"; // Import icons
import cardsData from "../../mock/cardsData"; // Import mock data
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

  // Map icons to their respective components
  const iconMap = {
    FaAppleAlt: <FaAppleAlt />,
    FaCarrot: <FaCarrot />,
    FaLemon: <FaLemon />,
    FaSeedling: <FaSeedling />,
  };

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
      <div className="dashboard-cards-container">
        <div className="dashboard-cards">
          {cardsData.map((card) => (
            <div className="card" key={card.id}>
              <div className="card-icon">{iconMap[card.icon]}</div>
              <div className="card-details">
                <h3 className="card-name">{card.name}</h3>
                <p className="card-required">
                  {card.requiredKg}
                  <span className="arrows">
                    <FaArrowUp className="arrow-up" />
                    <FaArrowDown className="arrow-down" />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;