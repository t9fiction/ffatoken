import React from "react";
import Skyanimation from "./Skyanimation";
import { HiOutlineDocumentText } from "react-icons/hi";

const Docs = () => {
  return (
      <div className=" mx-auto flex flex-col text-center bg-[#51bce9] z-0 relative">
        <div className="py-28 md:px-[25%] px-12">
          <h2 className="text-4xl py-4 font-extralight font-aokupro tracking-wide text-white z-10">
            documents
          </h2>
          <div className="flex flex-col md:flex-row justify-between md:gap-12 items-center">
            <p className="py-5 md:w-1/2 w-full text-justify">
              Here you can download documents what is the documents some words.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="md:w-1/2 py-5 space-y-4 z-40">
              <div className="items-center flex space-x-4">
                <div className="text-white">
                  <HiOutlineDocumentText size={30} />
                </div>
                <div className="uppercase font-semibold text-sm text-white underline">
                  <a href="https://drive.google.com/file/d/1awf_LQNfTE9gFcCD8jENOablk8F0zUMj/view?usp=sharing" className="" target="_blank" rel="noreferrer">
                    Download whitepaper
                  </a>
                </div>
              </div>
              <div className="items-center flex space-x-4 z-20">
                <div className="text-white">
                  <HiOutlineDocumentText size={30} />
                </div>
                <div className="uppercase font-semibold text-sm text-white underline">
                  <a href="https://drive.google.com/file/d/1awf_LQNfTE9gFcCD8jENOablk8F0zUMj/view?usp=sharing" className="" target="_blank" rel="noreferrer">
                    download smart contract
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Skyanimation />
      </div>
  );
};

export default Docs;
