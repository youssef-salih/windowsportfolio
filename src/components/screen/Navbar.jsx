import React, { useEffect, useRef, useState } from "react";
import Clock from "../utils_components/Clock";
import { windowsBoot } from "../../assets/images/icons";
import NavbarApp from "../base/NavbarApp";
import apps from "../../../apps.config";
import WindowsShowApps from "../utils_components/WindowsShowApps";

// windows searchbar

const Navbar = ({ openWindow, closed_windows, lockScreen }) => {
  const [statusCard, setStatusCard] = useState(false);
  const appsRef = useRef(null);

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
            open={openWindow}
            isClose={{}}
            isFocus={{}}
            isMinimized={{}}
          />
        </div>
      );
    });
    return sideBarAppsJsx;
  };

  useEffect(() => {
    // close windows menu
    const handleOutsideClick = (event) => {
      if (appsRef.current && !appsRef.current.contains(event.target)) {
        setStatusCard(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="main-navbar-vp absolute bottom-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-[#D6DDEF] text-sm select-none z-50">
      <div
        id="status-bar"
        tabIndex="0"
        className={
          "hidden md:flex relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent  py-1 "
        }
      />
      <div className="flex justify-center" ref={appsRef}>
        <div
          tabIndex="0"
          className={
            " outline-none transition duration-100 ease-in-out border-b-2 border-transparent flex items-center justify-center focus:border-gray-400 cursor-pointer "
          }
          onClick={() => setStatusCard((prev) => !prev)}
        >
          <img src={windowsBoot} alt={""} className="w-12 p-2" />
        </div>
        {statusCard ? (
          <WindowsShowApps isShown={setStatusCard} lockScreen={lockScreen} />
        ) : null}
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
