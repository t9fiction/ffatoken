import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar3 = () => {
  const [links, setLinks] = useState([
    { name: "HOME", url: "/" },
    { name: "ABOUT US", url: "#about" },
    { name: "MISSION", url: "#mission" },
    { name: "TOKENOMICS", url: "#tokenomics" },
    { name: "TEAM", url: "#team" },
    { name: "DOCS", url: "#docs" },
    { name: "contactus", url: "#contactus" },
  ]);
  const [dropdownLinks, setDropdownLinks] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth =
        document.querySelector(".nav-container")?.offsetWidth;
      const linksWidth = document.querySelector(".nav-links")?.offsetWidth;
      const dropdownWidth = document.querySelector(".dropdown")?.offsetWidth;

      if (containerWidth < linksWidth + dropdownWidth) {
        const lastLink = links[links.length - 1];
        setDropdownLinks([lastLink]);
        setLinks(links.slice(0, -1));
      } else if (containerWidth > linksWidth) {
        setLinks([...links, ...dropdownLinks]);
        setDropdownLinks([]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [links, dropdownLinks]);

  return (
    <>
      <div className="text-white md:bg-transparent hidden w-full md:h-0 md:flex flex-1 z-20 justify-center ">
        <div className="flex flex-row justify-between px-[100px] h-[112px] py-[41px] space-x-12 items-center flex-1 absolute">
          <div className="">
            <a href="/">
              <img
                alt="logo"
                src="/logo/logo_transparent.png"
                className="max-w-[200px]"
              />
            </a>
          </div>
          <div>
            <div className="flex flex-row space-x-9  flex-1 text-[14px] flex-wrap">
            <div className="nav-links flex space-x-9">
          {links.map((link) => (
            <div key={link.url} className="menuLinks">
              <a href={link.url}>{link.name}</a>
            </div>
          ))}
        </div>

        {dropdownLinks.length > 0 && (
          <Menu as="div" className="relative text-left">
            <div>
              <Menu.Button className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white text-gray-600 hover:text-gray-900 focus:outline-none">
                <ChevronDownIcon className="h-5 w-5" />
              </Menu.Button>
            </div>

            <Transition as={Fragment}>
              <Menu.Items className="absolute right-0 dropdown focus:outline-none">
                {dropdownLinks.map((link) => (
                  <Menu.Item key={link.url}>
                    {({ active }) => (
                      <a
                        href={link.url}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {link.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        )}
            </div>
          </div>
          <div>
            <button className="connectBtn">CONNECT WALLET</button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Navbar3;
