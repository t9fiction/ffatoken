import React from "react";
import Design from "./Design";

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
      <div className="-z-20 relative">
        <Design />
      </div>
    </div>
  );
};

export default Roadmap;
