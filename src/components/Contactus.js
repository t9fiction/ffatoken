import React from "react";
import Skyanimation from "./Skyanimation";

const Contactus = () => {
  return (
    <div className="relative h-screen bg-black opacity-90">
      <Skyanimation />
      {/* <img
        alt="universe"
        src="shapes.png"
        className="-z-30 absolute right-0 left-0 top-0 h-screen"
      />
      <img
        alt="universe"
        src="contact_shapes.png"
        className="absolute right-0 left-0 top-0 -z-10 h-screen"
      /> */}
      <div className="py-16  mx-auto flex flex-col ">
        <div className="text-center px-[25%]">
          <h3 className="text-primary uppercase">any questions?</h3>
          <h2 className="text-4xl  py-4 font-semibold font-aokupro tracking-widest text-white">
            Contact us
          </h2>
          <p className="py-5 text-white">
            Please use the form below to get in touch if you have any business
            or partnership to offer or simply have a question. Thank you for
            your interest in our project, we look forward to connecting with
            you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
