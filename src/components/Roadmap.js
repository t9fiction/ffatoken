import React from "react";
import Design from "./Design";
import Timeline2 from "./Timeline2";

const Roadmap = () => {
  return (
    <div className="relative h-[1000px] ">
      <img
        alt="universe"
        src="universe.png"
        className="-z-30 absolute right-0 left-0"
      />
      <img
        alt="universe"
        src="shapes.png"
        className="absolute right-0 left-0 -z-10"
      />
      <div className="py-16  mx-auto flex flex-col">
        <div className="text-center px-[25%]">
          <h3 className="text-primary uppercase">our journey</h3>
          <h2 className="text-4xl  py-4 font-semibold font-aokupro tracking-widest text-white">
            Roadmap
          </h2>
          <p className="py-5 text-white">
            Here is the roadmap for bringing our idea to life! We have carefully
            planned out the steps necessary to make it happen and are eager to
            take action. With your support and dedication, we believe we can
            achieve our goals, bring something truly amazing to the world and
            share our success with you, our investors. We invite you to join us
            on this journey.
          </p>
        </div>
        {/* <Timeline /> */}
        <Timeline2 />
      </div>
      <div className="-z-20 relative">
        <Design />
      </div>
    </div>
  );
};

export default Roadmap;
