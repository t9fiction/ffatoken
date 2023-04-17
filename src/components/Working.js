import React from "react";

const Working = () => {
  return (
    <div className="px-12 relative -top-28">
      <div className="flex flex-row justify-center gap-x-14 items-center mx-28">
        <div className="w-2/5 justify-center relative mx-12">
          <img alt="" src="maskgroup.png" className="w-[320px] h-[360px] -z-10 relative top-48 border-4 border-white right-0 left-28" />
          <img alt="" src="image8.png" className="w-[320px] border-4 border-white h-[360px] relative right-28 left-0 bottom-0"/>
        </div>
        <div className="flex flex-col w-3/5 space-y-4 mt-32">
          <p className="uppercase text-primary">more details</p>
          <h1 className="font-aokupro text-3xl">How does it work?</h1>
          <p className="text-[12px] pt-8">
            In our agricultural projects, we follow a careful process to
            identify the most suitable lands for farming. Our specialists
            conduct complete research and analysis to determine which crop would
            thrive best in the selected lands. Our team also calculates the cost
            of each plant and carefully chooses the most profitable crops for
            our clients. Our approach involves selling our agricultural
            vegetation through a security token system. For each tree that is
            planted, we issue a security token to the investor, providing a safe
            and transparent investment opportunity. As the trees grow and
            produce crops, we sell the harvest and distribute the revenue among
            the investors according to their respective holdings. This
            innovative model provides our clients with a sustainable and
            profitable investment opportunity in the agricultural sector. By
            investing in our projects, you not only support sustainable
            agriculture but also receive a return on your investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Working;
