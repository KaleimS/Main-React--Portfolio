import React from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "KALEIM SAUNDERS / Portfolio", href: "/", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <div>
      <Disclosure as="nav" className="">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8 bg-white">
          <div className="relative flex h-28 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>

            {/* Left: Dashboard link */}
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              
              {/* Dashboard link aligned to the left */}
              <div className="flex items-center ml-4">
                <a
                  href={navigation[0].href}
                  aria-current={navigation[0].current ? "page" : undefined}
                  className={classNames(
                    navigation[0].current
                      ? " text-black"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-2xl font-medium"
                  )}
                >
                  <span className="text-yellow-900 font-bold">
                    KALEIM SAUNDERS
                  </span>{" "}
                  <span className="font-light">/ Portfolio</span>
                </a>
              </div>
            </div>

            {/* Right: Other navigation links */}
            <div className="hidden sm:block sm:ml-auto">
              <div className="flex space-x-4">
                {navigation.slice(1).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-black"
                        : "text-black hover:bg-yellow-100 hover:text-white transition ease-in-out delay-100 hover:scale-90",
                      "rounded-md px-8 py-2 text-xl font-light"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

export default Header;
