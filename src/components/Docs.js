import React from "react";
import Skyanimation from "./Skyanimation";
import { HiOutlineDocumentText } from "react-icons/hi";

const Docs = () => {
  return (
    <div
      id="docs"
      className=" mx-auto flex flex-col text-center w-full z-0 relative"
    >
      <div className="py-28 md:px-[25%] px-12">
        <h2 className="text-4xl py-4 font-extralight font-aokupro tracking-wide text-white z-10">
          documents
        </h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-12 items-center">
          <p className="py-5 md:w-1/2 w-full text-justify">
            Here you can view and download our Whitepaper and Smart Contract.
            Simply click on the download button and the document will be
            available for you to review. If you have any questions or require
            additional information, please do not hesitate to contact us.
          </p>
          <div className="md:w-1/2 py-5 space-y-4 z-40">
            <div className="items-center flex space-x-4">
              <div className="text-white">
                <HiOutlineDocumentText size={30} />
              </div>
              <div className="uppercase font-semibold text-sm text-white underline">
                <a
                  href="https://drive.google.com/file/d/1awf_LQNfTE9gFcCD8jENOablk8F0zUMj/view?usp=sharing"
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Download whitepaper
                </a>
              </div>
            </div>
            <div className="items-center flex space-x-4 z-20">
              <div className="text-white">
                <HiOutlineDocumentText size={30} />
              </div>
              <div className="uppercase font-semibold text-sm text-white underline">
                <a
                  href="https://drive.google.com/file/d/1awf_LQNfTE9gFcCD8jENOablk8F0zUMj/view?usp=sharing"
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  download smart contract
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skyanimation />
      <img
        alt="blue"
        src="blue.png"
        className="absolute right-0 left-0 top-0 -z-50 w-full h-full"
      />
    </div>
  );
};

export default Docs;
