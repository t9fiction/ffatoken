import React from "react";

const Docs = () => {
  return (
    <>
      <div className=" mx-auto flex flex-col text-center bg-[#51bce9] bg-opacity-60 -z-30 relative">
        <div className="py-28 px-[25%]">
          <h2 className="text-4xl py-4 font-semibold font-aokupro tracking-wide text-white z-10">
            documents
          </h2>
          <div className="flex flex-row z-10 justify-between gap-12">
            <p className="py-5 w-1/2 text-justify">
              Here you can download documents what is the documents some words.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="w-1/2"></div>
          </div>
        </div>
        <div className="absolute -z-10">
          <img src="docs.png" alt="docs" className="w-screen relative" />
        </div>
        <div className="absolute -z-10 ">
          <img
            src="shapes_docs.png"
            alt="shapes"
            className="w-screen relative"
          />
        </div>
      </div>
    </>
  );
};

export default Docs;
