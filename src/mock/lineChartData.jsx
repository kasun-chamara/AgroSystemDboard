const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
  datasets: [
    {
      label: "Apples",
      data: [65, 59, 80, 81, 56, 55], // Data points for Apples
      borderColor: "rgba(255, 99, 132, 1)", // Line color
      backgroundColor: "rgba(255, 99, 132, 0.2)", // Fill color
      borderWidth: 3,
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(255, 99, 132, 1)", // Point color
      pointBorderColor: "#ffffff", // White border for points
      pointHoverRadius: 6, // Larger points on hover
      fill: true, // Fill under the line
    },
    {
      label: "Carrots",
      data: [28, 48, 40, 19, 86, 27], // Data points for Carrots
      borderColor: "rgba(54, 162, 235, 1)", // Line color
      backgroundColor: "rgba(54, 162, 235, 0.2)", // Fill color
      borderWidth: 3,
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(54, 162, 235, 1)", // Point color
      pointBorderColor: "#ffffff", // White border for points
      pointHoverRadius: 6, // Larger points on hover
      fill: true, // Fill under the line
    },
    {
      label: "Lemons",
      data: [18, 48, 77, 9, 100, 27], // Data points for Lemons
      borderColor: "rgba(255, 206, 86, 1)", // Line color
      backgroundColor: "rgba(255, 206, 86, 0.2)", // Fill color
      borderWidth: 3,
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(255, 206, 86, 1)", // Point color
      pointBorderColor: "#ffffff", // White border for points
      pointHoverRadius: 6, // Larger points on hover
      fill: true, // Fill under the line
    },
    {
      label: "Seedlings",
      data: [12, 30, 50, 70, 20, 40], // Data points for Seedlings
      borderColor: "rgba(75, 192, 192, 1)", // Line color
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
      borderWidth: 3,
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
      pointBorderColor: "#ffffff", // White border for points
      pointHoverRadius: 6, // Larger points on hover
      fill: true, // Fill under the line
    },
  ],
};

export default lineChartData;