import React from "react";
import BackgroundImage from "../utils_components/BackgroundImages";

const Desktop = ({ bgImageName }) => {
  return (
    <div className=" h-full w-full flex flex-col items-end justify-start content-start flex-wrap-reverse pt-8 bg-transparent relative overflow-hidden overscroll-none window-parent">
      <BackgroundImage img={bgImageName} />
    </div>
  );
};

export default Desktop;
