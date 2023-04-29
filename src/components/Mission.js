import React from "react";

const Mission = () => {
  return (
    <div id="mission" className="bg-white">
      <div className="md:px-8 py-16 mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:px-20 px-8 space-y-4 md:ml-8 justify-center flex flex-col md:justify-start">
          <h3 className="uppercase text-primary md:text-left text-center text-xl md:text-base">Farming For All</h3>
          <h1 className="font-aokupro text-3xl md:text-left text-center">Our mission</h1>
          <p className="text-base text-justify pt-6 pb-2">
            We aim to increase financial inclusion and provide accessible
            investment opportunities, so more people are able to participate in
            the financial system and build wealth, which can help to reduce
            inequality and improve financial stability throughout the world. We
            believe that everyone should have the opportunity to participate in
            the agricultural industry, regardless of their background or
            location. Join us in our mission to make farming accessible and
            transparent for all.
          </p>
          <button className="py-2 md:w-[200px] text-[13px]  font-semibold px-10 rounded-none border-2 border-primary hover:text-primary duration-300 ease-in-out uppercase bg-primary text-white hover:bg-white hover:border-primary">
            Invest Now
          </button>
        </div>
        <div className="md:px-4 md:w-1/2">
          <img alt="mission" src="/mission.png" className="w-screen md:h-[40%]" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
