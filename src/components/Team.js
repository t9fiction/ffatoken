/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Team = () => {
  const [team1, setTeam1] = useState(false);
  const [team2, setTeam2] = useState(false);
  const [team3, setTeam3] = useState(false);
  const [team4, setTeam4] = useState(false);

  const handleClick1 = () => {
    setTeam1((prev) => !prev);
    setTeam2(false);
    setTeam3(false);
    setTeam4(false);
  };
  const handleClick2 = () => {
    setTeam2((prev) => !prev);
    setTeam1(false);
    setTeam3(false);
    setTeam4(false);
  };
  const handleClick3 = () => {
    setTeam3((prev) => !prev);
    setTeam2(false);
    setTeam1(false);
    setTeam4(false);
  };
  const handleClick4 = () => {
    setTeam4((prev) => !prev);
    setTeam2(false);
    setTeam3(false);
    setTeam1(false);
  };
  return (
    <div id="team" className="flex items-center justify-center bg-white pb-12">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-4">
              <div className="w-full lg:w-6/12 px-4">
                <h3 className="text-primary uppercase">meet us</h3>
                <h2 className="text-4xl py-4 font-semibold font-aokupro tracking-wider">
                  our team
                </h2>
              </div>
            </div>

            {/* Team Members */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  {!team1 ? (
                    <>
                      <button onClick={handleClick1} className="mx-auto">
                        <img
                          className="drop-shadow-md transition-all duration-200 delay-100"
                          src="miguel.png"
                        />
                      </button>

                      <div className="text-center">
                        <h1 className="text-[#212121] font-semibold">
                          Miguel Cabeza
                        </h1>

                        <div className="text-[#616161] font-light">
                          Founder & CEO
                        </div>

                        <div
                          className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                        >
                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaFacebookF className="z-10" />
                            </div>
                          </a>

                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaTwitter className="z-10" />
                            </div>
                          </a>

                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaInstagram className="z-10" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="py-8 px-8">
                      <div
                        className="text-center bg-[#f4f7f0] pt-4"
                        onClick={handleClick1}
                      >
                        <h1 className="text-[#212121] font-semibold">
                          Miguel Cabeza
                        </h1>

                        <div className="text-[#616161] font-light">
                          Founder & CEO
                        </div>

                        <div
                          className="flex items-center justify-center hover:opacity-100
                          transition-opacity duration-300 space-x-3 mt-2"
                        >
                          <p className="text-[12px] text-justify px-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqa. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea com modo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum do lore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupida tat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  {!team2 ? (
                    <>
                      <button onClick={handleClick2} className="mx-auto">
                        <img
                          className="drop-shadow-md transition-all duration-200 delay-100"
                          src="martin.png"
                        />
                      </button>

                      <div className="text-center">
                        <h1 className="text-[#212121] font-semibold">
                          Martin Orbegoso
                        </h1>

                        <div className="text-[#616161] font-light">CTO</div>

                        <div
                          className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                        >
                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaFacebookF className="z-10" />
                            </div>
                          </a>

                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaTwitter className="z-10" />
                            </div>
                          </a>

                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaInstagram className="z-10" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="py-8 px-8">
                      <div
                        className="text-center bg-[#f4f7f0] pt-4"
                        onClick={handleClick2}
                      >
                        <h1 className="text-[#212121] font-semibold">
                          Martin Orbegoso
                        </h1>

                        <div className="text-[#616161] font-light">CTO</div>

                        <div
                          className="flex items-center justify-center hover:opacity-100
                          transition-opacity duration-300 space-x-3 mt-2"
                        >
                          <p className="text-[12px] text-justify px-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqa. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea com modo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum do lore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupida tat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  {!team3 ? (
                    <>
                      <button onClick={handleClick3} className="mx-auto">
                        <img
                          className="drop-shadow-md transition-all duration-200 delay-100"
                          src="miguel.png"
                        />
                      </button>

                      <div className="text-center">
                        <h1 className="text-[#212121] font-semibold">
                          Carlos Samame
                        </h1>

                        <div className="text-[#616161] font-light">
                          Head of Finance
                        </div>

                        <div
                          className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                        >
                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaFacebookF className="z-10" />
                            </div>
                          </a>

                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaTwitter className="z-10" />
                            </div>
                          </a>

                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaInstagram className="z-10" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="py-8 px-8">
                      <div
                        className="text-center bg-[#f4f7f0] pt-4"
                        onClick={handleClick3}
                      >
                        <h1 className="text-[#212121] font-semibold">
                          Carlos Samame
                        </h1>

                        <div className="text-[#616161] font-light">
                          Head of Finance
                        </div>

                        <div
                          className="flex items-center justify-center hover:opacity-100
                          transition-opacity duration-300 space-x-3 mt-2"
                        >
                          <p className="text-[12px] text-justify px-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqa. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea com modo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum do lore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupida tat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  {!team4 ? (
                    <>
                      <button onClick={handleClick4} className="mx-auto">
                        <img
                          className="drop-shadow-md transition-all duration-200 delay-100"
                          src="gavidia.png"
                        />
                      </button>

                      <div className="text-center">
                        <h1 className="text-[#212121] font-semibold">
                          Martin Gavidia
                        </h1>

                        <div className="text-[#616161] font-light">
                          Head of Agriculture
                        </div>

                        <div
                          className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                        >
                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaFacebookF className="z-10" />
                            </div>
                          </a>

                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaTwitter className="z-10" />
                            </div>
                          </a>

                          <a href="#" className="">
                            <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                              <FaInstagram className="z-10" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="py-8 px-8">
                      <div
                        className="text-center bg-[#f4f7f0] pt-4"
                        onClick={handleClick4}
                      >
                        <h1 className="text-[#212121] font-semibold">
                          Martin Gavidia
                        </h1>

                        <div className="text-[#616161] font-light">
                          Head of Agriculture
                        </div>

                        <div
                          className="flex items-center justify-center hover:opacity-100
                          transition-opacity duration-300 space-x-3 mt-2"
                        >
                          <p className="text-[12px] text-justify px-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqa. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea com modo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum do lore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupida tat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
