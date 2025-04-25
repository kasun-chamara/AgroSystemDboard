import React, { useState } from "react";
import buyersData from "../../mock/buyersData"; // Import mock data
import "./Buyers.css"; // Import CSS for styling

const Buyers = () => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const rowsPerPage = 8; // Number of rows per page

  // Calculate the index range for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = buyersData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < Math.ceil(buyersData.length / rowsPerPage)) {
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
    <div className="buyers-container">
      <h2 className="buyers-title">Buyers Details</h2>
      <div className="table-wrapper">
        <table className="buyers-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>TP</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((buyer) => (
              <tr key={buyer.id}>
                <td>
                  <img src={buyer.image} alt={buyer.name} className="buyer-image" />
                </td>
                <td>{buyer.name}</td>
                <td>{buyer.tp}</td>
                <td>{buyer.location}</td>
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
          disabled={currentPage === Math.ceil(buyersData.length / rowsPerPage)} // Disable Next button on the last page
        >
          → {/* Right arrow for Next */}
        </button>
      </div>
    </div>
  );
};

export default Buyers;