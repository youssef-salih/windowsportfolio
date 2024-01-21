import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wall1, wall2, wall3, wall4 } from "../../assets/images/bg";
import { changeBg } from "../../features/power/stateSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  const wallpapers = [
    { id: "wall-1", image: wall1 },
    { id: "wall-2", image: wall2 },
    { id: "wall-3", image: wall3 },
    { id: "wall-4", image: wall4 },
  ];

  const handleWallpaperClick = (wallpaperId) => {
    setSelectedWallpaper(wallpaperId);
    dispatch(changeBg(wallpaperId));
    localStorage.setItem("bg-image", wallpaperId);
  };
  useEffect(() => {
    const localBg = localStorage.getItem("bg-image");
    if (localBg !== null && localBg !== undefined) {
      setSelectedWallpaper(localBg);
    }
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-5 ">
        Choose your wallpapers
      </h1>
      <div className="w-full flex flex-wrap gap-4 items-center justify-center">
        {wallpapers.map((wallpaper) => (
          <img
            key={wallpaper.id}
            src={wallpaper.image}
            alt={`wallPaper ${wallpaper.id}`}
            className={`w-64 h-48 ${
              selectedWallpaper === wallpaper.id
                ? "border-4 border-blue-500"
                : ""
            }`}
            onClick={() => handleWallpaperClick(wallpaper.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Settings;

export const displaySettings = () => {
  return <Settings />;
};
