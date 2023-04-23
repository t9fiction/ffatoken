import React from "react";
import DonutLabels from "./DonutLabels";
import DonutChart3 from "./DonutChart3";
// import DonutChart from './DonutChart'

const Tokenomics = () => {
  const chartData = {
    labels: [
      "Inventives 8%",
      "Burn 7%",
      "Team 15%",
      "Treasury Shares 20%",
      "Inventives 50%",
    ],
    datasets: [
      {
        data: [8, 7, 15, 20, 50], // Replace with your data values
        backgroundColor: [
          "#44B7E7",
          "#197DA7",
          "#09668C",
          "#114C65",
          "#B0E8FF",
        ], // Replace with your colors
      },
    ],
  };

  return (
    <div className="pb-16 pt-8 px-[15%] mx-auto flex flex-col text-center bg-white z-10">
      <h3 className="text-primary uppercase">distribution</h3>
      <h2 className="text-4xl uppercase py-4 font-semibold font-aokupro tracking-wide">
        Tokenomics
      </h2>
      <p className="py-5">
        Our tokenomics chart provides a comprehensive overview of the various
        aspects of our economic model, including our token supply, distribution,
        and usage
      </p>
      <div className="justify-center flex py-8 items-center ">
        {/* <DonutLabels data={chartData} /> */}
        <DonutChart3 />
        {/* <DonutChart /> */}
        {/* <img alt="chart" src="PIECHART.png" className="w-[80%]" /> */}
      </div>
    </div>
  );
};

export default Tokenomics;
