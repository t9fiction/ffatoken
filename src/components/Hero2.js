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
    <div className="relative h-[430px] sm:h-[424px] flex-1 md:h-screen overflow-hidden -z-10 border-primary border-b-8">
      <video
        ref={videoRef}
        className="absolute -z-10 sm:w-full mobile-video desktop-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero2;
