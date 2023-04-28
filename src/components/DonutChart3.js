import React from "react";
import { Chart } from "react-google-charts";

const DonutChart3 = () => {
  const pieOptions = {
    title: "",
    pieHole: 0.5,
    slices: [
      {
        color: "#44B7E7",
      },
      {
        color: "#197DA7",
      },
      {
        color: "09668C",
      },
      {
        color: "#114C65",
      },
      {
        color: "#B0E8FF",
      },
    ],
    legend: {
      position: "top", // set default position to top
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    fontName: "aokupro",
    fontSize: 14,
  };

  // conditional rendering of legend position based on screen size
  const legendPosition = window.innerWidth >= 768 ? "right" : "top"; // adjust breakpoint as needed

  pieOptions.legend.position = legendPosition; // set legend position

  return (
    <div className="w-screen md:flex hidden">
      <Chart
        chartType="PieChart"
        data={[
          ["Distribution", "Share"],
          ["Incentives", 8],
          ["Burns", 7],
          ["Team", 15],
          ["Treasury", 20],
          ["Liquidity Pool", 50],
        ]}
        options={pieOptions}
        graph_id="PieChart"
        width={"100%"}
        height={"440px"}
        legend_toggle
      />
    </div>
  );
};

export default DonutChart3;
