/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Timeline2 = () => {
  return (
    <section class="items-center">
      <div class="justify-center w-full px-4 py-4  ">
        {/* first event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2>
            <p class=" pl-10  text-base font-normal text-white text-right">
              Q2 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-6 h-6 bg-primary rounded-full">
                  <div class="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0  text-base text-primary justify-start font-medium">
                Pre-Launch and Token Distribution
              </h2>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right">
              April 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="items-start flex">
                <div class="flex items-center justify-center w-4 h-4 border-2 border-transparent  bg-primary rounded-full">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="px-0  text-sm  text-primary justify-start">
                Finalize the FFA smart contract code and have it audited by a
                reputable third-party auditing firm.
              </p>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right">
              May 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 border-2 border-transparent bg-primary rounded-full">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="px-0  text-sm  text-primary justify-start">
                Launch the FFA website, including the whitepaper, token
                distribution plan, team information, and contact information.
              </p>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right">
              June 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 border-2 border-transparent bg-primary rounded-full">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="px-0  text-sm  text-primary justify-start">
                Distribute FFA tokens to the Liquidity Pool, Incentives,
                Treasury Shares, and Team, as outlined in the token distribution
                plan.
              </p>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            <h2 class="px-4  text-lg font-medium text-primary">Phase - II</h2>
            <p class=" pl-10  text-base font-normal text-white text-right">
              Q3 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-6 h-6 bg-primary rounded-full">
                  <div class="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0  text-base font-medium text-primary justify-start">
                Exchange Listings and Marketing
              </h2>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right">
              July 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 border-2 border-transparent bg-primary rounded-full">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="px-0  text-sm  text-primary justify-start">
                Launch FFA token on major decentralized exchanges such as
                Uniswap, PancakeSwap, and Quickswap, Shibaswap.
              </p>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right">
              August 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 border-2 border-transparent bg-primary rounded-full">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <h2 class="px-0  text-sm  text-primary justify-start">
                Launch a marketing campaign to increase FFA token awareness and
                interest among potential investors and users.
              </h2>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right">
              September 2023
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 border-2 border-transparent bg-primary rounded-full">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="px-0  text-sm  text-primary justify-start">
                Host a series of AMA sessions with the FFA team to answer
                community questions and address concerns.
              </p>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right"></p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className=""></div>
              <div class="w-px h-12 bg-primary"></div>
            </div>
            <div>
              <p class="px-0  text-sm  text-primary justify-start"></p>
            </div>
          </div>
        </div>

        {/* second event */}
        <div className="flex flex-row ">
          <div className="w-2/6 flex flex-row items-start justify-end">
            {/* <h2 class="px-4  text-lg font-medium text-primary">Phase - I</h2> */}
            <p class=" pl-10  text-base font-normal text-white text-right">
              
            </p>
          </div>
          <div class="relative w-4/6 flex justify-start">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div className="">
                <div class="flex items-center justify-center w-4 h-4 border-2 border-transparent bg-primary rounded-full">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <p class="px-0  text-sm  text-primary justify-start underline">
                <a href="#">
                See All
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Ending */}
      </div>
    </section>
  );
};

export default Timeline2;
