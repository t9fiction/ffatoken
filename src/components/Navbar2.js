import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar2 = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <div className="text-white md:bg-transparent hidden w-full md:h-0 md:flex flex-1 z-20 justify-center">
        <div className="flex flex-row justify-between px-[100px] h-[112px] py-[41px] w-full space-x-12 items-center flex-1 absolute">
          <div className="">
            <a href="/">
              <img
                alt="logo"
                src="/logo/logo_transparent.png"
                className="max-w-[200px]"
              />
            </a>
          </div>

          {/* Start of the new bar */}

          <div className="flex flex-row space-x-9  flex-1 text-[14px] flex-wrap min-w-fit">
            <div className="menuLinks">
              <a href="/">HOME</a>
            </div>
            <div className="menuLinks">
              <a href="#about">ABOUT US</a>
            </div>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <ChevronDownIcon
                  className="h-5 w-5 text-primary bg-transparent"
                  aria-hidden="false"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#mission"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        MISSION
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#team"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        TEAM
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#tokenomics"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        TOKENOMICS
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#docs"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        DOCS
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#contactus"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        CONTACT US
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* End of the new bar */}
          <div>
            <button className="connectBtn min-w-full">CONNECT WALLET</button>
          </div>
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
        <div className="text-white items-center">
          {toggle ? (
            <button onClick={handleClick}>
              <RxCross1 size={35} />
            </button>
          ) : (
            <button onClick={handleClick}>
              <div className="flex flex-col space-y-1 py-3 text-right pr-1">
                <div className="ml-4 w-2 text-white border-2"></div>
                <div className="ml-2 w-4  text-white border-2"></div>
                <div className="w-6 ml-0 text-white border-2"></div>
              </div>
              {/* <RiMenuFoldLine size={35} /> */}
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

export default Navbar2;
