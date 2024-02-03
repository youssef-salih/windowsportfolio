import React, { useEffect, useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import { useBattery } from "@uidotdev/usehooks";
import Clock from "../utils_components/Clock";
import {
  arrow,
  battery,
  batteryChargin,
  bluetooth,
  brightness,
  mute,
  settings,
  sound,
  wifi,
  windowsBoot,
} from "../../assets/images/icons";
import NavbarApp from "../base/NavbarApp";
import apps from "../../../apps.config";
import WindowsShowApps from "../utils_components/WindowsShowApps";

import "react-range-slider-input/dist/style.css";
import { useDispatch } from "react-redux";
import { openApp } from "../../features/apps/appsSlice";

// windows searchbar

const Navbar = ({ lockScreen }) => {
  const [statusCard, setStatusCard] = useState(false);
  const [menuSettings, setMenuSettings] = useState(false);

  const appsRef = useRef(null);

  let renderApps = () => {
    let sideBarAppsJsx = [];
    apps.forEach((app, index) => {
      sideBarAppsJsx.push(
        <div
          key={index}
          tabIndex="0"
          className={
            " outline-none transition duration-100 ease-in-out border-b-2 border-transparent flex items-center "
          }
        >
          <NavbarApp
            id={app.id}
            title={app.title}
            icon={app.icon}
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
    <div className="ohoo absolute bottom-0 right-0 w-screen h-14 shadow-md flex flex-nowrap justify-between items-center bg-[#D6DDEF] text-sm select-none z-50 ">
      <div className="flex justify-center md:w-full" ref={appsRef}>
        <div
          tabIndex="0"
          className={
            " outline-none transition duration-100 ease-in-out border-b-2 border-transparent flex items-center justify-center focus:border-gray-400 cursor-pointer "
          }
          onClick={() => setStatusCard((prev) => !prev)}
        >
          <img src={windowsBoot} alt={"winboot"} className="w-12 p-2" />
        </div>
        {statusCard && <WindowsShowApps lockScreen={lockScreen} />}
        {renderApps()}
      </div>

      <div
        className={
          "relative  text-xs md:text-sm outline-none transition duration-100 ease-in-out  flex items-center gap-x-5 mr-2"
        }
        onClick={() => setMenuSettings((prev) => !prev)}
      >
        <div tabIndex="0" className=" border-b-2 border-transparent group ">
          <Status />
        </div>
        {menuSettings && <MenuSettings />}

        <Clock mini />
      </div>
    </div>
  );
};

export default Navbar;

const Status = () => {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();
  const width = () => {
    return 0.1 + level * 0.88;
  };
  return (
    <div className="flex justify-center gap-x-2 pr-5 group-focus:bg-white group-focus:bg-opacity-40 py-3 px-5 rounded">
      <img src={wifi} alt="wifi" className="w-4" />
      <img src={sound} alt="sound" className="w-4" />
      {charging ? (
        <img src={batteryChargin} alt="" className="w-5 " />
      ) : (
        <div className="relative ">
          <div
            className={`absolute bottom-0.5 left-0.5 -translate-y-1/2 h-2 bg-black`}
            style={{ width: `${width()}rem` }}
          />
          <img src={battery} alt="" className="min-w-5 w-5  " />
        </div>
      )}
    </div>
  );
};
export function Battery() {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();
  const width = () => {
    return 0.1 + level * 0.88;
  };

  return (
    <>
      <div className="flex items-center gap-x-2">
        {charging ? (
          <img src={batteryChargin} alt="" className="w-5 " />
        ) : (
          <div className="relative ">
            <div
              className={`absolute bottom-0.5 left-0.5 -translate-y-1/2 h-2 bg-black`}
              style={{ width: `${width()}rem` }}
            />
            <img src={battery} alt="" className="w-5  " />
          </div>
        )}

        <p className="text-lg">{parseInt(level * 100)} %</p>
      </div>
    </>
  );
}

const BottomMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-11 rounded-b bg-[#cdd4e8] flex items-center justify-between px-4 border-t-2 border-gray-600 border-opacity-10">
      <Battery />
      <img
        src={settings}
        alt=""
        className="w-8  p-1 cursor-pointer"
        onClick={() => dispatch(openApp("settings"))}
      />
    </div>
  );
};

const SliderMenu = ({ icon, value }) => {
  return (
    <div className="px-5   mb-4 flex gap-x-6 items-center">
      <img src={icon} alt="" className="w-5" />
      <RangeSlider
        className="single-thumb"
        defaultValue={[0, value]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={false}
      />
    </div>
  );
};

const SettingsButtons = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center border border-gray-300 rounded w-fit shadow-sm bg-[#f6f6f6] active:bg-main  hover:bg-[#f6f6f6] hover:bg-opacity-75 group settings-button">
        <div className="py-3 px-4 border-r">
          <img src={icon} alt="" className="w-4  group-active:invert" />
        </div>
        <div className="py-3 px-4">
          <img
            src={arrow}
            alt="arrow"
            className="w-3 -rotate-90 group-active:invert"
          />
        </div>
      </div>
      <p className="text-md capitalize">{text}</p>
    </div>
  );
};

const MenuSettings = () => {
  const menuSettings = [
    {
      icon: wifi,
      text: "wifi",
    },
    {
      icon: bluetooth,
      text: "bluetooth",
    },
  ];
  return (
    <div className="menu-settings-container shadow-md border-black border border-opacity-15 absolute -top-3  right-3  -translate-y-full min-h-96 w-[200%] bg-[#D6DDEF] rounded flex flex-col justify-between ">
      <div className=" gap-4 flex  justify-start flex-wrap  p-4">
        {menuSettings.map((set, index) => (
          <SettingsButtons key={index} icon={set.icon} text={set.text} />
        ))}
      </div>
      <div>
        <div>
          <SliderMenu icon={brightness} value={100} />
        </div>
        <div>
          <SliderMenu icon={mute} value={70} />
        </div>
        <BottomMenu />
      </div>
    </div>
  );
};
