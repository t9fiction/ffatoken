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
              className="w-[320px] h-[360px] relative top-12 left-16 md:top-32 border-4 border-white md:right-0 md:left-24"
            />
            <img
              alt=""
              src="image8.png"
              className="w-[320px] border-4 border-white h-[360px] relative right-9 bottom-24 md:right-28 md:left-0 md:bottom-16"
            />
          </div>
          <div className="flex flex-col md:w-3/5 w-full space-y-4 mt-20">
            <p className="uppercase text-primary text-center md:text-left">more details</p>
            <h1 className="font-aokupro text-2xl text-center md:text-left md:text-3xl">How does it work?</h1>
            <p className="text-[16px] pt-2 sm:pt-4 md:pt-5 text-justify md:text-left">
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
