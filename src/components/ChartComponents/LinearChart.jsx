import React from "react";
import { Line } from "react-chartjs-2"; // Import Line chart
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler } from "chart.js"; // Register chart.js components
import lineChartData from "../../mock/lineChartData"; // Import mock data
import "./LinearChart.css"; // Import CSS for styling

// Register chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

const LinearChart = () => {
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#333", // Legend text color
          font: {
            size: 14, // Font size for legend
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#ffffff", // Tooltip background color
        titleColor: "#333", // Tooltip title color
        bodyColor: "#555", // Tooltip body color
        borderColor: "#ddd", // Tooltip border color
        borderWidth: 1,
        cornerRadius: 8, // Rounded corners for tooltips
        padding: 10, // Padding inside the tooltip
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
        ticks: {
          color: "#555", // X-axis label color
          font: {
            size: 12, // Font size for x-axis labels
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light grid lines on y-axis
        },
        ticks: {
          color: "#555", // Y-axis label color
          font: {
            size: 12, // Font size for y-axis labels
          },
        },
        beginAtZero: true, // Start y-axis at 0
      },
    },
    animation: {
      duration: 1000, // Animation duration in milliseconds
      easing: "easeInOutQuad", // Smooth animation
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