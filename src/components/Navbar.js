import React from "react";

const Navbar = () => {
  return (
    <div className="text-white bg-secondary w-full h-49 z-20">
      <div className="flex flex-row justify-between px-[100px] h-[112px] py-[41px] items-center flex-1 fixed top-4 left-0 right-0">
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
        <button className="connectBtn">CONNECT WALLET</button>
      </div>
    </div>
  );
};

export default Navbar;
