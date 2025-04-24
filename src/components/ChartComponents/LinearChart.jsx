import React from "react";
import { Line } from "react-chartjs-2"; // Import Line chart
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js"; // Register chart.js components
import lineChartData from "../../mock/lineChartData"; // Import mock data
import "./LinearChart.css"; // Import CSS for styling

// Register chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LinearChart = () => {
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light grid lines on y-axis
        },
        beginAtZero: true, // Start y-axis at 0
      },
    },
  };

  return (
    <div className="linear-chart-container">
      <h2 className="chart-title">Sales Overview</h2>
      <div className="chart-wrapper">
        <Line data={lineChartData} options={options} />
      </div>
    </div>
  );
};

export default LinearChart;