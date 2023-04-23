import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const DonutLabels = ({ data }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef.current && data) {
      // Destroy existing chart
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      const chart = new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: {
          legend: {
            display: false,
          },
        },
      });

      // Create chart labels
      const labelsContainer =
        chartRef.current.parentNode.querySelector(".chart-labels");
      if (labelsContainer) {
        labelsContainer.innerHTML = ''; // Clear existing labels
        data.labels.forEach((label, index) => {
          const labelElement = document.createElement("div");
          labelElement.innerText = label;
          labelElement.style.backgroundColor =
            data.datasets[0].backgroundColor[index];
          labelsContainer.appendChild(labelElement);
        });
      }
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return (
    <div className="relative flex flex-row items-center">
      <canvas ref={chartRef}></canvas>
      <div className="chart-labels "></div>
    </div>
  );
};

export default DonutLabels;
