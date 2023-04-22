import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Inventives 8%", "Burn 7%", "Team 15%","Treasury Shares 20%","Inventives 50%"], // Replace with your labels
        datasets: [
          {
            data: [8, 7, 15, 20, 50], // Replace with your data values
            backgroundColor: ["#44B7E7", "#197DA7", "#09668C","#114C65","#B0E8FF"], // Replace with your colors
          },
        ],
      },
      options: {
        // Configure chart options as needed
      },
    });

    // Clean up the chart when component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DonutChart;
