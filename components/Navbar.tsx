import { Menu, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { divide } from "lodash";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
// import Dropdown, { EditActiveIcon, EditInactiveIcon } from "./Dropdown";
// import Dropdown from "./Dropdown";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const { isLoading, error, data } = useQuery(["me"], () =>
    fetch("/api/me").then((res) => res.json())
  );

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">XYZ school</a>
      </div>
      <div className="flex-none gap-2 px-8 p-5">
        {data?.name ? (
          <div>
            <Menu>
              <div>
                <Menu.Button>
                  <div className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={
                        data.picture
                          ? data.picture
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      }
                      alt="user"
                    />
                    <p>
                      <span className="text-gray-400 text-14">Hi, </span>
                      <span className="ml-1 font-bold text-gray-400 text-14">
                        {data?.name}
                      </span>
                      <FaChevronDown className="text-gray-400 text-14" />
                    </p>
                  </div>
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
                <Menu.Items className="absolute right-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      <a
                        className="group flex w-full items-center rounded-md px-2 py-2 text-sm ui-active:bg-primary ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                        href="/account-settings"
                      >
                        Account settings
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        className="group flex w-full items-center rounded-md px-2 py-2 text-sm ui-active:bg-primary ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                        onClick={async () => {
                          await fetch(
                            "http://localhost:3000/api/auth/logout"
                          ).then((response) => console.log(response));
                          router.reload();
                          // setTimeout( () => router.reload(), 2000)
                        }}
                      >
                        Logout
                      </div>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
