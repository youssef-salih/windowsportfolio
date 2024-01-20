import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { wall1, wall2, wall3, wall4 } from "../../assets/images/bg";
import { bgImageValue } from "../../features/power/stateSlice";

const BackgroundImage = () => {
  const wallpapers = [
    { id: "wall-1", image: wall1 },
    { id: "wall-2", image: wall2 },
    { id: "wall-3", image: wall3 },
    { id: "wall-4", image: wall4 },
  ];
  const bgImageName = useSelector(bgImageValue);

  const selectedWallpaper = wallpapers.find(
    (wallpaper) => wallpaper.id === bgImageName
  );

  return (
    <div
      style={{
        backgroundImage: `url(${
          selectedWallpaper ? selectedWallpaper.image : ""
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
      }}
      className="absolute -z-10 top-0 right-0 overflow-hidden h-full w-full"
    />
  );
};

export default BackgroundImage;
