import React from "react";

const Tokenomics = () => {
  return (
    <div className="pb-16 pt-8 px-[25%] mx-auto flex flex-col text-center bg-white z-10">
      <h3 className="text-primary uppercase">distribution</h3>
      <h2 className="text-4xl uppercase py-4 font-semibold font-aokupro tracking-wide">
        Tokenomics
      </h2>
      <p className="py-5">
        Our tokenomics chart provides a comprehensive overview of the various
        aspects of our economic model, including our token supply, distribution,
        and usage
      </p>
      <div className="justify-center flex pt-8">
        <img alt="chart" src="PIECHART.png" className="w-[80%]" />
      </div>
    </div>
  );
};

export default Tokenomics;
