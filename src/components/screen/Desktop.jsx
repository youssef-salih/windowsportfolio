import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BackgroundImage from "../utils_components/BackgroundImages";
import Window from "../base/Window";
import apps from "../../../apps.config";
import { closed_windowsValue } from "../../features/apps/appsSlice";
import { bgImageValue } from "../../features/power/stateSlice";

const Desktop = () => {
  
  const closed_windows = useSelector(closed_windowsValue);
  const renderWindows = () => {
    let windowsJsx = [];
    apps.forEach((app, index) => {
      if (closed_windows[app.id] === false) {
        windowsJsx.push(
          <Window
            key={index}
            id={app.id}
            title={app.title}
            screen={app.screen}
            icon={app.icon}
          />
        );
      }
    });
    return windowsJsx;
  };

  return (
    <div className="h-full w-full flex flex-col items-end justify-start content-start flex-wrap-reverse bg-transparent relative overflow-hidden overscroll-none window-parent">
      <BackgroundImage  />
      <div
        className="absolute h-full w-full bg-transparent"
        data-context="desktop-area"
      >
        {renderWindows()}
      </div>
    </div>
  );
};

export default Desktop;
