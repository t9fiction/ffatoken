import React, { useRef, useEffect } from "react";

const Hero2 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("canplaythrough", () => {
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div className="relative h-[408px] sm:h-[424px] flex-1 md:h-screen overflow-hidden -z-10 border-primary border-b-8">
      <video
        ref={videoRef}
        className="absolute -z-10 sm:w-full mobile-video desktop-video "
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="twittertree.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative left-0 right-0 md:bottom-[24px] top-[70%] sm:top-[55%] md:top-[60%] md:w-[55%] mx-auto justify-center items-center text-center">
        <h1 className="text-center text-white text-[20px] sm:text-[40px] md:text-6xl uppercase mx-auto font-aokupro justify-center items-center flex">
          Agritokenization
        </h1>
        <h1 className="text-center text-white text-[20px] sm:text-[40px] md:text-6xl leading-2 md:leading-tight uppercase font-aokupro">
          <span className="text-primary">& </span>
          Sustainability
        </h1>
        <p className="text-center text-white text-[11px] sm:text-[16px]  md:text-[20px] md:pt-2 pt-1 px-[10%] sm:px[10%] md:px-20">
          Connecting investors with farmers and improving the needs of both
          through the use of tokenization
        </p>
      </div>
    </div>
  );
};

export default Hero2;
