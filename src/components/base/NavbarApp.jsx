import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closed_windowsValue,
  minimized_windowsValue,
  openApp,
} from "../../features/apps/appsSlice";
const NavbarApp = ({ id, icon }) => {
  const dispatch = useDispatch();

  const closed_windows = useSelector(closed_windowsValue);
  const minimized_windows = useSelector(minimized_windowsValue);

  return (
    <div
      tabIndex="0"
      // open window
      onClick={() => dispatch(openApp(id))}
      className={
        (closed_windows[id] === false && "bg-black bg-opacity-10 p-2") +
        " w-auto md:p-2 outline-none relative transition hover:bg-white hover:bg-opacity-40 rounded m-1 cursor-pointer"
      }
      id={"navbar-" + id}
    >
      <img
        width="28px"
        height="28px"
        className="w-7"
        src={icon}
        alt="windows App Icon"
      />

      {/* dot under the icon when minimized */}
      {!closed_windows[id] && minimized_windows[id] && (
        <div className=" w-2 h-1 absolute left-1/2 bottom-0 -translate-x-1/2 bg-yellow-700 rounded-sm"></div>
      )}
    </div>
  );
};

export default NavbarApp;
