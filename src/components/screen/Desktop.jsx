import React, { useEffect, useState } from "react";
import BackgroundImage from "../utils_components/BackgroundImages";
import Window from "../base/Window";
import apps from "../../../apps.config";

const Desktop = ({ closed_windows, bgImageName, closeWindow, openWindow }) => {
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
            closed_windows={closeWindow}
          />
        );
      }
    });
    return windowsJsx;
  };

  return (
    <div className="h-full w-full flex flex-col items-end justify-start content-start flex-wrap-reverse bg-transparent relative overflow-hidden overscroll-none window-parent">
      <BackgroundImage img={bgImageName} />

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
