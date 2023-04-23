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
      position: "right",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    // chartArea: {
    //     left: 0,
    //     top: 0,
    //     width: '100%',
    //     height: '70%',
    // },
    fontName: "aokupro",
    fontSize: 14,
  };

 
  return (
    <Chart
                  chartType="PieChart"
                  data={[
                      ['Distribution', 'Share'],
                      ['Incentives', 8],
                      ['Burns', 7],
                      ['Team', 15],
                      ['Treasury', 20],
                      ['Liquidity Pool', 50],
                  ]}
                  options={pieOptions}
                  graph_id="PieChart"
                  width={'100%'}
                  height={'440px'}
                  legend_toggle
              />
  );
};

export default DonutChart3;
