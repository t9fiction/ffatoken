import React, { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <div className="text-white md:bg-transparent hidden w-full md:h-0 md:flex flex-1 z-20">
        <div className="flex flex-row justify-between px-[100px] h-[112px] py-[41px] space-x-12 items-center flex-1 absolute">
          <div>
            <a href="/">
              <img
                alt="logo"
                src="/logo/logo_transparent.png"
                className="w-[188px]"
              />
            </a>
          </div>
          <div>
            <ul className="flex flex-row space-x-[48px]  flex-1 text-[14px]">
              <li className="menuLinks">
                <a href="/">HOME</a>
              </li>
              <li className="menuLinks">
                <a href="#about">ABOUT US</a>
              </li>
              <li className="menuLinks">
                <a href="#mission">MISSION</a>
              </li>
              <li className="menuLinks">
                <a href="#tokenomics">TOKENOMICS</a>
              </li>
              <li className="menuLinks">
                <a href="#team">TEAM</a>
              </li>
              <li className="menuLinks">
                <a href="#docs">DOCS</a>
              </li>
              <li className="menuLinks">
                <a href="#contactus">CONTACT US</a>
              </li>
            </ul>
          </div>
          <button className="connectBtn flex flex-1">CONNECT WALLET</button>
        </div>
      </div>
      <div className="absolute bg-transparent text-white h-24 flex flex-1 justify-between items-center md:hidden px-8 left-0 right-0">
        <div>
          <a href="/">
            <img
              alt="logo"
              src="/logo/logo_transparent.png"
              className="w-[188px]"
            />
          </a>
        </div>
        <div className="text-white">
          {toggle ? (
            <button onClick={handleClick}>
              <RxCross1 size={35} />
            </button>
          ) : (
            <button onClick={handleClick}>
              <RiMenuFoldLine size={35} />
            </button>
          )}
        </div>
      </div>
      {toggle && (
        <div className="md:hidden flex flex-1 absolute top-24 text-secondary py-12 left-0 right-0 items-center z-20">
          <ul className="p-6 bg-black-gradient absolute top-0 ease-in-out right-0 mx-4 duration-300 my-2 min-w-[140px] rounded-xl sidebar flex flex-col space-y-8">
            <li className="navLinks">
              <a onClick={handleClick} href="/">
                HOME
              </a>
            </li>
            <li className="navLinks">
              <a onClick={handleClick} href="#about">
                ABOUT US
              </a>
            </li>
            <li className="navLinks">
              <a onClick={handleClick} href="#mission">
                MISSION
              </a>
            </li>
            <li className="navLinks">
              <a onClick={handleClick} href="#tokenomics">
                TOKENOMICS
              </a>
            </li>
            <li className="navLinks">
              <a onClick={handleClick} href="#team">
                TEAM
              </a>
            </li>
            <li className="navLinks">
              <a onClick={handleClick} href="#docs">
                DOCS
              </a>
            </li>
            <li className="navLinks">
              <a onClick={handleClick} href="#contactus">
                CONTACT US
              </a>
            </li>
            <button className="border-[2px] border-white py-2 rounded-md px-4 text-white">
              Connect Wallet
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
