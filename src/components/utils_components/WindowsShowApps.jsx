import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { magnify, power, settings } from "../../assets/images/icons";
import apps from "../../../apps.config";
import {
  screenLockedValue,
  screenOff,
  screenOn,
} from "../../features/power/stateSlice";

export const SearchWin = () => {
  return (
    <div className="border-b-2 border-[#5BBDD6] bg-[#19233A] mx-4 rounded-sm mt-2 p-1 flex">
      <img src={magnify} alt="magnify" className="mx-2" />
      <input
        type="text"
        className="bg-transparent outline-none text-white w-full"
        placeholder="Type here to search "
      />
    </div>
  );
};
const Disconect = ({ isShown }) => {
  const screenLocked = useSelector(screenLockedValue);
  const dispatch = useDispatch();
  return (
    <div className="absolute bottom-0 h-12 bg-black w-full bg-opacity-60 rounded-b backdrop-blur-3xl  drop-shadow-lg flex justify-between items-center px-4">
      <img src={settings} alt="setting" className="w-8" />
      <button
        onClick={() => {
          dispatch(screenOff());
          isShown(false);
        }}
      >
        <img src={power} alt="" className="w-6 text-white invert" />
      </button>
    </div>
  );
};

const WindowsShowApps = ({ isShown }) => {
  return (
    <div className="h-full min-h-[30rem] bg-white bg-opacity-20 backdrop-blur-md rounded drop-shadow-lg md:w-1/3 w-5/6 max-w-[503px] md:min-w-[503px]  absolute md:-top-4 top-0 left-0 md:left-auto -translate-y-full ">
      <SearchWin />
      <div className="grid grid-cols-4 gap-4 px-4 mt-2">
        {apps.map((app, index) => (
          <div className="flex flex-col items-center" key={index}>
            <img
              src={app.icon}
              alt=""
              className="w-16 mx-2 hover:bg-ub-gray p-2 transition-all duration-200 rounded-md"
            />
            <p className="text-black">{app.title}</p>
          </div>
        ))}
      </div>

      <Disconect isShown={isShown} />
    </div>
  );
};

export default WindowsShowApps;
