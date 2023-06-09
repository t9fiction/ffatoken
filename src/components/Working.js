import React from "react";

const Working = () => {
  return (
    <div className="bg-white">
      <div className="px-10 relative">
        <div className="flex flex-col-reverse md:flex-row justify-center md:gap-x-14 md:-top-20 relative items-center md:mx-28">
          <div className="md:w-2/5 justify-center -top-4 relative md:mx-12">
            <img
              alt=""
              src="maskgroup.png"
              className="w-[320px] h-[360px] md:h-auto relative top-16 -right-11 md:top-32 border-4 border-white md:right-0 md:left-24"
            />
            <img
              alt=""
              src="image8.png"
              className="w-[320px] md:w-[90%] border-4 border-white h-[360px] md:h-[90%] relative -left-6 -top-20 sm:-top-28 md:top-0 md:right-28 md:left-0 md:bottom-16"
            />
          </div>
          <div className="flex flex-col md:w-3/5 w-full space-y-4 md:space-y-3 mt-12 md:mt-20 md:overflow-auto md:h-[440px]">
            <p className="uppercase text-primary text-center md:text-left">more details</p>
            <h1 className="font-aokupro text-2xl text-center md:text-left md:text-3xl">How does it work?</h1>
            <p className="text-[16px] pt-2 sm:pt-3 md:pt-4 text-justify md:text-left">
              In our agricultural projects, we follow a careful process to
              identify the most suitable lands for farming. Our specialists
              conduct complete research and analysis to determine which crop
              would thrive best in the selected lands. Our team also calculates
              the cost of each plant and carefully chooses the most profitable
              crops for our clients. Our approach involves selling our
              agricultural vegetation through a security token system. For each
              tree that is planted, we issue a security token to the investor,
              providing a safe and transparent investment opportunity. As the
              trees grow and produce crops, we sell the harvest and distribute
              the revenue among the investors according to their respective
              holdings. This innovative model provides our clients with a
              sustainable and profitable investment opportunity in the
              agricultural sector. By investing in our projects, you not only
              support sustainable agriculture but also receive a return on your
              investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
