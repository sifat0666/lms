import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Slider = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          <div className="navbar bg-base-100 flex items-center justify-between px-10">
            <div>
              <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                <div className="btn text-2xl btn-ghost">
                  <GiHamburgerMenu />
                </div>
              </label>
            </div>
            <div className="flex-none gap-5">
              <div>register</div>
              <div>login</div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
