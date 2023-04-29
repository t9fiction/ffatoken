import React from "react";
import Skyanimation from "./Skyanimation";

const Contactus = () => {
  return (
    <div id="contactus" className="relative  w-full py-20 ">
      <Skyanimation />
      {/* <img
        alt="universe"
        src="shapes.png"
        className="-z-30 absolute right-0 left-0 top-0 h-screen"
      /> */}
      <img
        alt="universe"
        src="bg-galaxy.png"
        className="absolute right-0 left-0 top-0 -z-50 w-full h-full"
      />
      <div className=" mx-auto flex flex-col ">
        <div className="text-center md:px-[25%] px-12">
          <h3 className="text-primary uppercase">any questions?</h3>
          <h2 className="md:text-4xl text-2xl py-4  font-aokupro tracking-widest text-white">
            Contact us
          </h2>
          <p className="py-5 text-white text-justify md:text-left">
            Please use the form below to get in touch if you have any business
            or partnership to offer or simply have a question. Thank you for
            your interest in our project, we look forward to connecting with
            you!
          </p>
        </div>

        {/* Start of the form */}
        <div className="container px-[10%] mx-auto">
          <form className="w-full py-12 space-y-4">
            <div className="flex flex-wrap flex-row">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-transparent text-gray-700 border focus:border-primary hover:border-primary border-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="John Kennedy"
                />
              </div>

              <div className="w-full md:w-1/3 px-3">
                <input
                  className="appearance-none block w-full bg-transparent text-gray-700 border focus:border-primary hover:border-primary border-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <input
                  className="appearance-none block w-full mt-5 md:mt-0 bg-transparent text-gray-700 border focus:border-primary hover:border-primary border-white  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="subject"
                  type="subject"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-2">
              <div className="w-full px-3">
                <textarea
                  className=" no-resize appearance-none border-white focus:border-primary bg-transparent block w-full hover:border-primary text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center ">
              <div className="flex mx-auto px-3 w-full">
                <button className="py-2 text-[13px] font-semibold px-10 rounded-none border-2 border-primary w-full md:w-40 hover:text-primary duration-300 ease-in-out uppercase bg-primary text-white hover:bg-white hover:border-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* End of Form */}
      </div>
    </div>
  );
};

export default Contactus;
