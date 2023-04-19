import React from "react";

const Mission = () => {
  return (
    <div className="bg-white">
      <div className="px-8 py-16 mx-auto flex flex-row items-center">
        <div className="w-1/2 px-20 space-y-4 ml-8">
          <h3 className="uppercase text-primary">Farming For All</h3>
          <h1 className="font-aokupro text-3xl">Our mission</h1>
          <p className="text-[12px] pt-6 pb-2">
            We aim to increase financial inclusion and provide accessible
            investment opportunities, so more people are able to participate in
            the financial system and build wealth, which can help to reduce
            inequality and improve financial stability throughout the world. We
            believe that everyone should have the opportunity to participate in
            the agricultural industry, regardless of their background or
            location. Join us in our mission to make farming accessible and
            transparent for all.
          </p>
          <button className="py-1 text-[13px] font-semibold px-10 rounded-none border-2 border-primary hover:text-primary duration-300 ease-in-out uppercase bg-primary text-white hover:bg-white hover:border-primary">
            Invest Now
          </button>
        </div>
        <div className="pt-4">
          <img alt="mission" src="/mission.png" className="h-80" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
