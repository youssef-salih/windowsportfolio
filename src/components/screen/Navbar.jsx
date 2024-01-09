import React, { useState } from "react";
import Clock from "../utils_components/Clock";
import { windowsBoot } from "../../assets/images/icons";
import NavbarApp from "../base/NavbarApp";
import apps from "../../../apps.config";
import WindowsShowApps from "../utils_components/WindowsShowApps";

// windows searchbar

const Navbar = ({ shutDown, lockScreen }) => {
  const [statusCard, setStatusCard] = useState(true);

  let renderApps = () => {
    let sideBarAppsJsx = [];
    apps.forEach((app, index) => {
      sideBarAppsJsx.push(
        <div
          key={index}
          tabIndex="0"
          className={
            " outline-none transition duration-100 ease-in-out border-b-2 border-transparent flex focus:border-gray-400  "
          }
        >
          <NavbarApp
            id={app.id}
            title={app.title}
            icon={app.icon}
            isClose={{}}
            isFocus={{}}
            isMinimized={{}}
          />
        </div>
      );
    });
    return sideBarAppsJsx;
  };

  return (
    <div className="main-navbar-vp absolute bottom-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-gray text-ubt-gray text-sm select-none z-50">
      <div
        id="status-bar"
        tabIndex="0"
        // removed onBlur from here
        className={
          "relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent  py-1 "
        }
      />
      <div className="flex ">
        <div
          tabIndex="0"
          className={
            "mr-4 outline-none transition duration-100 ease-in-out border-b-2 border-transparent flex items-center focus:border-gray-400  "
          }
        >
          <img
            src={windowsBoot}
            alt={""}
            width="28px"
            height="28px"
            className="w-7"
          />
          {statusCard ? <WindowsShowApps /> : null}
        </div>
        {renderApps()}
      </div>

      <div
        tabIndex="0"
        className={
          "pl-2 pr-2 text-xs md:text-sm outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-gray-400 py-1"
        }
      >
        <Clock mini />
      </div>
    </div>
  );
};

export default Navbar;
