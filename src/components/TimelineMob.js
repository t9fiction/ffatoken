/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TimelineMob = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <section class="items-center">
      <div class="justify-center w-full px-4 py-4  ">
        {/* first event */}
        <div className="flex flex-col group hover:cursor-pointer">
          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-3 md:w-24">
              <div class="w-px h-6 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0 text-base text-primary justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                Phase - I <span className="text-white pl-2">Q2 2023</span>
              </h2>
            </div>
          </div>

          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-3 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 group-hover:w-6 ease-in-out duration-300 group-hover:h-6 bg-primary rounded-full">
                  <div class="group-hover:w-4 group-hover:h-4 w-3 h-3 ease-in-out duration-300 bg-secondary group-hover:bg-white rounded-full group-hover:border-secondary group-hover:border-2"></div>
                </div>
              </div>
              <div class="w-px h-16 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0  text-base text-primary justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                Pre-Launch and Token Distribution
              </h2>
            </div>
          </div>
        </div>

        {/* Second */}
        <div className="flex flex-col group hover:cursor-pointer">
          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-3 md:w-24">
              <div class="w-px h-6 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0 text-base text-white justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                April 2023
              </h2>
            </div>
          </div>

          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-3 md:w-24">
              <div className="items-start flex">
                <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent  bg-primary rounded-full">
                  <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-16 bg-primary"></div>
            </div>
            <div>
              <p class="px-0 max-w-[300px] sm:max-w-lg  text-sm text-white justify-start ease-in-out duration-300  group-hover:text-primary">
                Finalize the FFA smart contract code and have it audited by a
                reputable third-party auditing firm.
              </p>
            </div>
          </div>
        </div>

        {/* Third */}
        <div className="flex flex-col group hover:cursor-pointer">
          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-3 md:w-24">
              <div class="w-px h-6 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0 text-base text-white justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                May 2023
              </h2>
            </div>
          </div>

          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-3 md:w-24">
              <div className="items-start flex">
                <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent  bg-primary rounded-full">
                  <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-16 bg-primary"></div>
            </div>
            <div>
              <p class="px-0 max-w-[300px] sm:max-w-lg  text-sm text-white justify-start ease-in-out duration-300  group-hover:text-primary">
                Launch the FFA website, including the whitepaper, token
                distribution plan, team information, and contact information.
              </p>
            </div>
          </div>
        </div>

        {/* Event */}
        <div className="flex flex-col group hover:cursor-pointer">
          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-3 md:w-24">
              <div class="w-px h-6 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0 text-base text-white justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                June 2023
              </h2>
            </div>
          </div>

          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-3 md:w-24">
              <div className="items-start flex">
                <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent  bg-primary rounded-full">
                  <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-16 bg-primary"></div>
            </div>
            <div>
              <p class="px-0 max-w-[300px] sm:max-w-lg  text-sm text-white justify-start ease-in-out duration-300  group-hover:text-primary">
                Distribute FFA tokens to the Liquidity Pool, Incentives,
                Treasury Shares, and Team, as outlined in the token distribution
                plan.
              </p>
            </div>
          </div>
        </div>

        {display && (
          <>
            <div className="flex flex-col group hover:cursor-pointer">
              <div class="relative flex justify-start">
                <div class="flex flex-col items-center w-10 mr-3 md:w-24">
                  <div class="w-px h-6 bg-primary"></div>
                </div>
                <div>
                  <h2 class="px-0 text-base text-white justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                    July 2023
                  </h2>
                </div>
              </div>

              <div class="relative flex justify-start">
                <div class="flex flex-col items-center w-10 mr-3 md:w-24">
                  <div className="items-start flex">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent  bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-px h-16 bg-primary"></div>
                </div>
                <div>
                  <p class="px-0 max-w-[300px] sm:max-w-lg  text-sm text-white justify-start ease-in-out duration-300  group-hover:text-primary">
                    Launch FFA token on major decentralized exchanges such as
                    Uniswap, PancakeSwap, and Quickswap, Shibaswap.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col group hover:cursor-pointer">
              <div class="relative flex justify-start">
                <div class="flex flex-col items-center w-10 mr-3 md:w-24">
                  <div class="w-px h-6 bg-primary"></div>
                </div>
                <div>
                  <h2 class="px-0 text-base text-white justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                    August 2023
                  </h2>
                </div>
              </div>

              <div class="relative flex justify-start">
                <div class="flex flex-col items-center w-10 mr-3 md:w-24">
                  <div className="items-start flex">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent  bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-px h-16 bg-primary"></div>
                </div>
                <div>
                  <p class="px-0 max-w-[300px] sm:max-w-lg  text-sm text-white justify-start ease-in-out duration-300  group-hover:text-primary">
                    Launch a marketing campaign to increase FFA token awareness
                    and interest among potential investors and users.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col group hover:cursor-pointer">
              <div class="relative flex justify-start">
                <div class="flex flex-col items-center w-10 mr-3 md:w-24">
                  <div class="w-px h-6 bg-primary"></div>
                </div>
                <div>
                  <h2 class="px-0 text-base text-white justify-start ease-in-out duration-300 group-hover:font-bold font-medium group-hover:text-white">
                    September 2023
                  </h2>
                </div>
              </div>

              <div class="relative flex justify-start">
                <div class="flex flex-col items-center w-10 mr-3 md:w-24">
                  <div className="items-start flex">
                    <div class="flex items-center ease-in-out duration-300 justify-center w-4 h-4 border-2 group-hover:w-6 group-hover:h-6 border-transparent  bg-primary rounded-full">
                      <div class="w-2 h-2 group-hover:w-4 group-hover:h-4 ease-in-out duration-300 bg-secondary group-hover:border-secondary group-hover:border-2 group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-px h-16 bg-primary"></div>
                </div>
                <div>
                  <p class="px-0 max-w-[300px] sm:max-w-lg  text-sm text-white justify-start ease-in-out duration-300  group-hover:text-primary">
                    Host a series of AMA sessions with the FFA team to answer
                    community questions and address concerns.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Last */}
        <div className="flex flex-col group hover:cursor-pointer">
          <div class="relative flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-6 h-6 border-2 border-transparent ease-in-out duration-300 bg-primary group-hover:bg-white rounded-full">
                  <div class="w-4 h-4 bg-white group-hover:bg-primary rounded-full group-hover:w-3 group-hover:h-3 group-hover:border-secondary ease-in-out duration-300 items-center justify-center flex border-2">
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
              <p class="group-hover:text-white ease-in-out duration-300 px-0  text-sm  text-primary justify-start underline">
                {display ? <a onClick={handleDisplay}>See Less</a> : <a onClick={handleDisplay}>See All</a>}
              </p>
            </div>
          </div>
        </div>

        {/* Ending */}
      </div>
    </section>
  );
};

export default TimelineMob;
