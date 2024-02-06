import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import Slider from "react-rangeslider";

import { useBattery, useClickAway } from "@uidotdev/usehooks";
import { useDispatch, useSelector } from "react-redux";
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
import { openApp } from "../../features/apps/appsSlice";
import "react-rangeslider/lib/index.css";
import "react-range-slider-input/dist/style.css";
import {
  brightnessValue,
  changeBrightness,
  changeVolume,
  statusValue,
  toggle,
  volumeValue,
} from "../../features/status/statusSlice";
// windows searchbar

const Navbar = ({ lockScreen }) => {
  const [statusCard, setStatusCard] = useState(false);
  const [menuSettings, setMenuSettings] = useState(false);

  const appsRef = useClickAway(() => {
    setStatusCard(false);
  });
  const settingsRef = useClickAway(() => {
    setMenuSettings(false);
  });

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
          <NavbarApp id={app.id} title={app.title} icon={app.icon} />
        </div>
      );
    });
    return sideBarAppsJsx;
  };

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
        {statusCard && (
          <WindowsShowApps
            lockScreen={lockScreen}
            setStatusCard={setStatusCard}
          />
        )}
        {renderApps()}
      </div>

      <div
        className={
          "relative  text-xs md:text-sm outline-none transition duration-100 ease-in-out  flex items-center gap-x-5 mr-2"
        }
      >
        <div ref={settingsRef}>
          <div
            tabIndex="0"
            className=" border-b-2 border-transparent group "
            onClick={() => setMenuSettings((prev) => !prev)}
          >
            <Status />
          </div>
          {menuSettings && <MenuSettings />}
        </div>

        <Clock mini />
      </div>
    </div>
  );
};

export default Navbar;

const Status = () => {
  return (
    <div className="flex justify-center gap-x-2 pr-5 group-focus:bg-white group-focus:bg-opacity-30 group-hover:bg-white group-hover:bg-opacity-40 py-3 px-5 rounded">
      <img src={wifi} alt="wifi" className="w-4" />
      <img src={sound} alt="sound" className="w-4" />
      <Battery />
    </div>
  );
};
export function Battery({ textLevel }) {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();
  const width = () => {
    return 0.1 + level * 0.88;
  };

  return (
    <>
      {charging ? (
        <img src={batteryChargin} alt="" className="w-5 " />
      ) : (
        <div className="relative ">
          <div
            className={`absolute bottom-0.5 left-0.5 -translate-y-1/2 h-2 bg-black`}
            style={{ width: `${width()}rem` }}
          />
          <img src={battery} alt="" className="w-5 min-w-5 " />
        </div>
      )}
      {textLevel && <p className="text-lg">{parseInt(level * 100)} %</p>}
    </>
  );
}

const BottomMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-11 rounded-b bg-[#cdd4e8] flex items-center justify-between px-4 border-t-2 border-gray-600 border-opacity-10">
      <div className="flex items-center gap-x-2">
        <Battery textLevel />
      </div>

      <img
        src={settings}
        alt=""
        className="w-8  p-1 cursor-pointer"
        onClick={() => dispatch(openApp("settings"))}
      />
    </div>
  );
};

const SettingsButtons = ({ icon, text }) => {
  const dispatch = useDispatch();
  const status = useSelector(statusValue);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`flex items-center border border-gray-300 rounded w-fit shadow-sm bg-[#f6f6f6] ${
          status[text] && "bg-main"
        }  hover:bg-[#cdcdcd] hover:bg-opacity-55  group settings-button cursor-pointer`}
        onClick={() => dispatch(toggle(text))}
      >
        <div className="py-3 px-4 border-r">
          <img
            src={icon}
            alt=""
            className={`w-4 ${status[text] && "invert group-hover:invert-0"}  `}
          />
        </div>
        <div className="py-3 px-4">
          <img
            src={arrow}
            alt="arrow"
            className={`w-3 -rotate-90 ${
              status[text] && "invert group-hover:invert-0"
            }  `}
          />
        </div>
      </div>
      <p className="text-md capitalize">{text}</p>
    </div>
  );
};

const SliderMenu = ({ icon, value, onChange, id }) => {
  const dispatch = useDispatch();
  const [test, setTest] = useState();

  return (
    <div className="px-5   mb-4 flex gap-x-6 items-center">
      <img src={icon} alt="" className="w-5" />
      <Slider
        min={0}
        max={100}
        tooltip={false}
        value={parseInt(value)}
        className=" w-full "
        orientation="horizontal"
        onChange={onChange}
      />
    </div>
  );
};

const MenuSettings = () => {
  const dispatch = useDispatch();
  const volumeVolume = useSelector(volumeValue);
  const brightnessLevel = useSelector(brightnessValue);

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
  const handleChangeVolumeLevel = (v) => {
    dispatch(changeVolume(v));
    // setVolumeLevel(v);
    localStorage.setItem("volume-level", v);
  };

  // Handle brightness level change
  const handleChangeBrightnessLevel = (v) => {
    dispatch(changeBrightness(v));
    localStorage.setItem("brightness-level", v);
  };

  return (
    <div className="shadow-md border-black border border-opacity-15 absolute -top-3  right-3  -translate-y-full min-h-96 w-[200%] bg-[#D6DDEF] rounded flex flex-col justify-between ">
      <div className=" gap-4 flex  justify-start flex-wrap  p-4">
        {menuSettings.map((set, index) => (
          <SettingsButtons key={index} icon={set.icon} text={set.text} />
        ))}
      </div>
      <div>
        <SliderMenu
          icon={brightness}
          value={brightnessLevel}
          onChange={handleChangeBrightnessLevel}
        />

        <SliderMenu
          icon={mute}
          value={volumeVolume}
          onChange={handleChangeVolumeLevel}
        />

        <BottomMenu />
      </div>
    </div>
  );
};
