import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden -z-10 border-primary border-b-8">
      <video className="absolute -z-10 w-full min-h-full " autoPlay loop muted>
        <source src="/trree.mp4" type="video/mp4" />
        {/* <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        /> */}
      </video>
      <div className="relative left-0 right-0 bottom-[24px] top-72 w-[55%] mx-auto justify-center items-center">
        <h1 className="text-center text-white text-[76px] uppercase mx-auto font-aokupro">
          Agritokenization
        </h1>
        <h1 className="text-center text-white text-[76px] leading-tight uppercase font-aokupro">
          <span className="text-primary"> & </span>
          Sustainability
        </h1>
        <p className="text-center text-white text-[20px] pt-4">
          Connecting investors with farmers and improving the needs of both
          through the use of Tokenization
        </p>
      </div>
    </div>
  );
};

export default Hero;
