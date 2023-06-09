/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Timeline2 = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <section class="items-center">
      <div class="justify-center w-full px-4 py-4">
        {/* first event */}
        <div className="flex flex-row group hover:cursor-pointer">
          <div className="flex flex-row items-start justify-end w-[33%]">
            <h2 class="px-4  text-lg font-medium text-primary group-hover:underline">
              Phase - I
            </h2>
            <p class="text-base font-normal flex-wrap truncate group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
              Q2 2023
            </p>
          </div>
          <div class=" flex justify-start">
            <div class="flex flex-col items-center w-10">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 group-hover:w-6 ease-in-out duration-300 group-hover:h-6 bg-primary rounded-full">
                  <div class="group-hover:w-4 group-hover:h-4 w-3 h-3 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="group-hover:text-white flex ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start whitespace-nowrap overflow-hidden">
                Pre-Launch and Token Distribution
              </p>
            </div>
            {/* <div>
              <h2 class="px-0  text-base text-primary max-w-lg min-w-lg  justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                Pre-Launch and Token Distribution
              </h2>
            </div> */}
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row group hover:cursor-pointer">
          <div className=" flex flex-row items-start justify-end w-[33%]">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
              April 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 ">
              <div className="items-start flex">
                <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent  bg-primary rounded-full">
                  <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                Finalize the FFA smart contract code and have it audited by a
                reputable third-party auditing firm.
              </p>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row group hover:cursor-pointer">
          <div className=" flex flex-row items-start justify-end w-[33%]">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
              May 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10">
              <div className="">
                <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                  <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                Launch the FFA website, including the whitepaper, token
                distribution plan, team information, and contact information.
              </p>
            </div>
          </div>
        </div>

        {/* second event */}

        <div className="flex flex-row group hover:cursor-pointer">
          <div className=" flex flex-row items-start justify-end w-[33%]">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
              June 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10">
              <div className="">
                <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                  <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="transform group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                Distribute FFA tokens to the Liquidity Pool, Incentives,
                Treasury Shares, and Team, as outlined in the token distribution
                plan.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row group hover:cursor-pointer">
          <div className="flex flex-row items-start justify-end w-[33%]">
            <h2 class="text-lg font-medium text-primary group-hover:underline px-4">
              Phase - II
            </h2>
            <p class="text-base font-normal group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
              Q3 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 group-hover:w-6 ease-in-out duration-500 group-hover:h-6 bg-primary rounded-full">
                  <div class="group-hover:w-4 group-hover:h-4 w-3 h-3 ease-in-out duration-300 group-hover:border-secondary group-hover:border-2 bg-secondary group-hover:bg-white rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0  text-base font-medium text-primary justify-start group-hover:text-white">
                Exchange Listings and Marketing
              </h2>
            </div>
          </div>
        </div>
        {display && (
          <>
            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
                <p class=" pl-10  text-base font-normal group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
                  July 2023
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Launch FFA token on major decentralized exchanges such as
                    Uniswap, PancakeSwap, and Quickswap, Shibaswap.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className="flex flex-row items-start justify-end w-[33%]">
                {/* <h2 class="px-4  text-lg font-medium text-primary"></h2> */}
                <p class=" pl-10  text-base font-normal group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
                  August 2023
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <h2 class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Launch a marketing campaign to increase FFA token awareness
                    and interest among potential investors and users.
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  September 2023
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Host a series of AMA sessions with the FFA team to answer
                    community questions and address concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* more data */}
            <div className="flex flex-row group hover:cursor-pointer">
              <div className="flex flex-row items-start justify-end w-[33%]">
                <h2 class="text-lg font-medium text-primary group-hover:underline px-4">
                  Phase - III
                </h2>
                <p class="text-base font-normal group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
                  Q4 2023
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center justify-center w-4 h-4 group-hover:w-6 ease-in-out duration-500 group-hover:h-6 bg-primary rounded-full">
                      <div class="group-hover:w-4 group-hover:h-4 w-3 h-3 ease-in-out duration-300 group-hover:border-secondary group-hover:border-2 bg-secondary group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <h2 class="px-0  text-base font-medium text-primary justify-start group-hover:text-white">
                    Platform Development
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  October 2023
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Begin developing the FFA platform, including the integration
                    of FFA utility tokens into the platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  November 2023
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Conduct user testing and feedback to improve the FFA
                    platform's functionality and user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  December 2023
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Launch the beta version of the FFA platform and provide
                    early access to the community for feedback and improvements.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className="flex flex-row items-start justify-end w-[33%]">
                <h2 class="text-lg font-medium text-primary group-hover:underline px-4">
                  Phase - IV
                </h2>
                <p class="text-base font-normal group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
                  Q1 2024
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center justify-center w-4 h-4 group-hover:w-6 ease-in-out duration-500 group-hover:h-6 bg-primary rounded-full">
                      <div class="group-hover:w-4 group-hover:h-4 w-3 h-3 ease-in-out duration-300 group-hover:border-secondary group-hover:border-2 bg-secondary group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <h2 class="px-0  text-base font-medium text-primary justify-start group-hover:text-white">
                    Full Platform Launch and Adoption
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  January 2024
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Address feedback and implement necessary improvements to the
                    FFA platform based on the beta testing phase.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  February 2024
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Finalize the FFA platform, including full integration of the
                    FFA utility tokens into the platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  March 2024
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Launch the full version of the FFA platform and promote
                    adoption among the cryptocurrency community, traders, and
                    investors.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className="flex flex-row items-start justify-end w-[33%]">
                <h2 class="text-lg font-medium text-primary group-hover:underline px-4">
                  Phase - V
                </h2>
                <p class="text-base font-normal group-hover:text-primary text-white text-right group-hover:font-bold ease-in-out duration-300">
                  Q2 2024 onwards
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center justify-center w-4 h-4 group-hover:w-6 ease-in-out duration-500 group-hover:h-6 bg-primary rounded-full">
                      <div class="group-hover:w-4 group-hover:h-4 w-3 h-3 ease-in-out duration-300 group-hover:border-secondary group-hover:border-2 bg-secondary group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <h2 class="px-0  text-base font-medium text-primary justify-start group-hover:text-white">
                    Future Development and Expansion
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  Ongoing
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Expand the FFA platform to include additional features such
                    as staking, lending, borrowing, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  Ongoing
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Partner with other decentralized projects to integrate FFA
                    utility tokens into their platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  Ongoing
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Host regular community events and incentivize FFA token
                    holders to participate in platform governance and
                    decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" pl-10  text-base font-normal text-white text-right group-hover:text-primary group-hover:font-bold ease-in-out duration-300">
                  Ongoing
                </p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className="">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                    </div>
                  </div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start">
                    Explore potential partnerships and collaborations with
                    traditional financial institutions to bridge the gap between
                    traditional and decentralized finance.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row group hover:cursor-pointer">
              <div className=" flex flex-row items-start justify-end w-[33%]">
                <p class=" text-base font-normal text-white text-right"></p>
              </div>
              <div class="relative w-4/6 flex justify-start">
                <div class="flex flex-col items-center w-10">
                  <div className=""></div>
                  <div class="w-px h-12 bg-primary"></div>
                </div>
                <div>
                  <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start"></p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="flex flex-row group hover:cursor-pointer">
          <div className=" flex flex-row items-start justify-end w-[33%]">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right"></p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10">
              <div className="">
                <div class="flex items-center justify-center w-6 h-6 border-2 border-transparent ease-in-out duration-300 bg-primary group-hover:bg-white rounded-full">
                  <div class="w-4 h-4 bg-white group-hover:bg-primary rounded-full  group-hover:border-secondary ease-in-out duration-300 border-2 items-center justify-center flex">
                    <button onClick={handleDisplay}>
                      {display ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="group-hover:text-white ease-in-out duration-300 px-0 max-w-lg min-w-lg  text-sm  text-primary justify-start underline">
                <a onClick={handleDisplay}>See All</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline2;
