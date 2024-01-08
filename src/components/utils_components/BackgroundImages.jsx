import React from "react";
import { wall1 } from "../../assets/images/bg";

export default function BackgroundImage({ img }) {
  const wallpapers = {
    "wall-1": wall1,
  };
  return (
    <div
      style={{
        backgroundImage: `url(${wallpapers[img]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
      }}
      className={` absolute -z-10 top-0 right-0 overflow-hidden h-full w-full`}
    />
  );
}
