import React, { useState } from "react";
import stockData from "../../mock/stockData"; // Import mock data
import "./Stock.css"; // Import CSS for styling

const Stock = () => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const rowsPerPage = 8; // Number of rows per page

  // Calculate the index range for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = stockData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < Math.ceil(stockData.length / rowsPerPage)) {
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
    <div className="stock-container">
      <h2 className="stock-title">Stock Details</h2>
      <div className="table-wrapper">
        <table className="stock-table">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price (1kg)</th>
              <th>Farmer Name</th>
              <th>Contact</th>
              <th>Connect</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((stock) => (
              <tr key={stock.id}>
                <td>
                  <img src={stock.productImage} alt={stock.productName} className="product-image" />
                </td>
                <td>{stock.productName}</td>
                <td>{stock.pricePerKg}</td>
                <td>{stock.farmerName}</td>
                <td>{stock.contact}</td>
                <td>
                  <button className="connect-button">Connect</button>
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
          disabled={currentPage === Math.ceil(stockData.length / rowsPerPage)} // Disable Next button on the last page
        >
          → {/* Right arrow for Next */}
        </button>
      </div>
    </div>
  );
};

export default Stock;