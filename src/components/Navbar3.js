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
    { name: "a", url: "#a" },
    { name: "b", url: "#b" },
    { name: "c", url: "#c" },
  ]);
  const [dropdownLinks, setDropdownLinks] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = document.querySelector(".nav-container")?.offsetWidth;
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
    <div className="nav-container flex justify-between mx-auto text-white flex-1 absolute px-4">
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
  );
};

export default Navbar3;
