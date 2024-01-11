import React from "react";
import BackgroundImage from "../utils_components/BackgroundImages";
import Window from "../base/Window";

const Desktop = ({ bgImageName }) => {
  return (
    <div className=" h-full w-full flex flex-col items-end justify-start content-start flex-wrap-reverse pt-8 bg-transparent relative overflow-hidden overscroll-none window-parent">
      <BackgroundImage img={bgImageName} />
      <div
        className="absolute h-full w-full bg-transparent"
        data-context="desktop-area"
      >
       <Window/>
      </div>
    </div>
  );
};

export default Desktop;
