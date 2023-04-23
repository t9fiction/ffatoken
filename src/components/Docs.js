import React from "react";
import Skyanimation from "./Skyanimation";
import { HiOutlineDocumentText } from "react-icons/hi";

const Docs = () => {
  return (
    <>
      <div className=" mx-auto flex flex-col text-center bg-[#51bce9] -z-30 relative">
        <Skyanimation />
        <div className="py-28 px-[25%]">
          <h2 className="text-4xl py-4 font-semibold font-aokupro tracking-wide text-white z-10">
            documents
          </h2>
          <div className="flex flex-row justify-between gap-12 items-center">
            <p className="py-5 w-1/2 text-justify">
              Here you can download documents what is the documents some words.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="w-1/2 py-5 space-y-4">
              <div className="items-center flex space-x-4 z-20">
                <div className="text-white">
                  <HiOutlineDocumentText size={30} />
                </div>
                <div className="uppercase font-semibold text-sm text-white underline">
                  <a href="#" className="hover:cursor-pointer">
                    Download whitepaper
                  </a>
                </div>
              </div>
              <div className="items-center flex space-x-4 z-20">
                <div className="text-white">
                  <HiOutlineDocumentText size={30} />
                </div>
                <div className="uppercase font-semibold text-sm text-white underline">
                  <a href="#" className="hover:cursor-pointer">
                    download smart contract
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
