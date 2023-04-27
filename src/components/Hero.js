import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[228px] sm:h-[424px] md:h-screen overflow-hidden -z-10 border-primary border-b-8">
      <video className="absolute -z-10 sm:w-full md:min-h-full" autoPlay loop muted>
        <source src="/treepro.mp4" type="video/mp4" />
        {/* <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        /> */}
      </video>
      <div className="relative left-0 right-0 md:bottom-[24px] top-28 sm:top-60 md:top-72 md:w-[55%] mx-auto justify-center items-center">
        <h1 className="text-center text-white text-[20px] sm:text-[40px] md:text-[76px] uppercase mx-auto font-aokupro">
          Agritokenization
        </h1>
        <h1 className="text-center text-white text-[20px] sm:text-[40px] md:text-[76px] leading-3 md:leading-tight uppercase font-aokupro">
          <span className="text-primary"> & </span>
          Sustainability
        </h1>
        <p className="text-center text-white text-[12px] sm:text-[16px] md:text-[20px] md:pt-4 pt-1 sm:pt-2 px-[88px] sm:px-44 md:px-20">
          Connecting investors with farmers and improving the needs of both
          through the use of Tokenization
        </p>
      </div>
    </div>
  );
};

export default Hero;
