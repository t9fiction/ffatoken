/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Timeline = () => {
  return (
    <div className="flex-1 rounded-lg shadow-xl mt-4 p-8 text-white flex-row flex">
      <div className="relative px-4 w-5/6">
        {/* <div className="absolute h-full border border-solid border-opacity-50 border-primary"></div> */}

        <div className="flex items-center w-full my-12 -ml-1.5">
        <div className="absolute  h-[72px] border border-solid border-opacity-60 border-primary"></div>
          <div className="w-1/12 z-10">
            <div className="w-3.5 h-3.5 bg-primary rounded-full"></div>
          </div>
          <div className="w-11/12">
            <p className="text-base">Profile informations changed.</p>
          </div>
        </div>

        <div className="flex items-center w-full my-12 -ml-1.5">
        <div className="absolute  h-[72px] border border-solid border-opacity-60 border-primary"></div>
          <div className="w-1/12 z-10">
            <div className="w-3.5 h-3.5 bg-primary rounded-full"></div>
          </div>
          <div className="w-11/12">
            <p className="text-base">
              Connected with{" "}
              <a href="#" className="text-primary font-bold">
                Colby Covington
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center w-full my-12 -ml-1.5">
          <div className="w-1/12 z-10">
            <div className="w-3.5 h-3.5 bg-primary rounded-full"></div>
          </div>
          <div className="w-11/12">
            <p className="text-base">
              Invoice{" "}
              <a href="#" className="text-primary font-bold">
                #4563
              </a>{" "}
              was created.
            </p>
          </div>
        </div>

        <div className="flex items-center w-full my-12 -ml-1.5">
          <div className="w-1/12 z-10">
            <div className="w-3.5 h-3.5 bg-primary rounded-full"></div>
          </div>
          <div className="w-11/12">
            <p className="text-base">
              Message received from{" "}
              <a href="#" className="text-primary font-bold">
                Cecilia Hendric
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center w-full my-12 -ml-1.5">
          <div className="w-1/12 z-10">
            <div className="w-3.5 h-3.5 bg-primary rounded-full"></div>
          </div>
          <div className="w-11/12">
            <p className="text-base">
              New order received{" "}
              <a href="#" className="text-primary font-bold">
                #OR9653
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center w-full my-12 -ml-1.5">
          <div className="w-1/12 z-10">
            <div className="w-3.5 h-3.5 bg-primary rounded-full"></div>
          </div>
          <div className="w-11/12">
            <p className="text-base">
              Message received from{" "}
              <a href="#" className="text-primary font-bold">
                Jane Stillman
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
