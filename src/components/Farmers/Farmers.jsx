import React, { useState } from "react";
import farmersData from "../../mock/farmersData"; // Import mock data
import "./Farmers.css"; // Import CSS for styling

const Farmers = () => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const rowsPerPage = 8; // Number of rows per page

  // Calculate the index range for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = farmersData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < Math.ceil(farmersData.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Back button click
  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="farmers-container">
      <h2 className="farmers-title">Farmers Details</h2>
      <div className="table-wrapper">
        <table className="farmers-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>TP</th> {/* Added Farmers TP column */}
              <th>Period</th>
              <th>Expected Kg</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((farmer) => (
              <tr key={farmer.id}>
                <td>
                  <img src={farmer.image} alt={farmer.name} className="farmer-image" />
                </td>
                <td>{farmer.name}</td>
                <td>{farmer.tp}</td> {/* Render Farmers TP */}
                <td>{farmer.period}</td>
                <td>{farmer.expectedKg} Kg</td>
                <td>{farmer.location}</td>
                <td>
                  <span className={`status-badge ${farmer.status.toLowerCase()}`}>
                    {farmer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="pagination-buttons">
        <button
          className="pagination-button"
          onClick={handleBack}
          disabled={currentPage === 1} // Disable Back button on the first page
        >
          ← {/* Left arrow for Back */}
        </button>
        <button
          className="pagination-button"
          onClick={handleNext}
          disabled={currentPage === Math.ceil(farmersData.length / rowsPerPage)} // Disable Next button on the last page
        >
          → {/* Right arrow for Next */}
        </button>
      </div>
    </div>
  );
};

export default Farmers;